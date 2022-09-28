import React, { useState, useEffect, useRef } from "react";
import useAudio from "../../hooks/useAudio";
import useCheckIsMobile from "../../hooks/useCheckIsMobile";
import Tooltip from "../../common/tooltip/Tooltip";

const Module = ({ id, src, animations, clickable, information }) => {
  const [showAnimation, setshowAnimation] = useState(false);
  const [open, setOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const animationRef = useRef(null);
  const [playing, toggle] = useAudio(animations?.[0]?.sound, () => {
    if (isAnyAnimationOverlay()) {
      handleCloseOverlayAnimation();
    } else {
      handleLeave();
    }
  });
  const isMobile = useCheckIsMobile();

  const isAnyAnimationOverlay = () =>
    animations?.find((animation) => animation.overlay);

  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    if (information) {
      setOpen(true);
    }
  };

  const openBlackPage = () => {
    if (id === "guy") {
      const black = document.getElementById("black-page");
      black.style.display = "inherit";
    }
  };

  const handleClick = () => {
    // modules with tooltip & animation for mobile
    if (clickCount === 1 && isMobile) {
      handleClose();
      setshowAnimation(true);
      toggle();
      openBlackPage();
    } else {
      // modules without tooltip & with animation for mobile
      if (clickCount === 0 && !information) {
        setshowAnimation(true);
      }
      handleOpen();
    }
    // desktop, tooltip on hover & animation on click
    if (clickable && !isMobile) {
      handleClose();
      setshowAnimation(true);
      toggle();
      openBlackPage();
    }
    setClickCount(clickCount + 1);
  };

  const handleLeave = () => {
    if (!isAnyAnimationOverlay()) {
      setshowAnimation(false);
      if (playing) {
        toggle();
      }
    }
    handleClose();
    setClickCount(0);
  };

  const handleCloseOverlayAnimation = () => {
    setshowAnimation(false);
    if (playing) {
      toggle();
    }
    if (id === "guy") {
      const black = document.getElementById("black-page");
      black.style.display = "none";
    }
    setClickCount(0);
  };

  const getMediaContent = (animation) => {
    switch (animation.type) {
      case "video":
        return (
          <video
            id={animation.id}
            ref={animationRef}
            src={animation.src}
            type="media/mp4"
            loop={animation.loop || false}
            muted={animation.muted ? true : false}
            onEnded={() => setshowAnimation(false)}
            autoPlay
            controls={false}
            playsInline
          ></video>
        );
      case "image":
        return (
          <img
            id={animation.id}
            ref={animationRef}
            src={animation.src}
            onMouseLeave={
              animation.overlay ? handleCloseOverlayAnimation : undefined
            }
          />
        );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        animationRef.current &&
        !animationRef.current.contains(event.target) &&
        handleLeave
      ) {
        if (!isAnyAnimationOverlay()) {
          handleLeave();
        } else {
          handleCloseOverlayAnimation();
        }
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleLeave]);

  return (
    <>
      <div id={id} className={`module-image ${id}`} onMouseLeave={handleLeave}>
        <img
          onClick={handleClick}
          onMouseEnter={handleOpen}
          src={src}
          alt={id}
        />
        {open && <Tooltip information={information} />}
      </div>
      {showAnimation &&
        animations &&
        animations.map((animation) => {
          return (
            <div key={animation.id} className="module-animation">
              {getMediaContent(animation)}
            </div>
          );
        })}
    </>
  );
};

export default Module;
