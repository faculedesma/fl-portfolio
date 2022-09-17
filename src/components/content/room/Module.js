import React, { useState, useEffect, useRef } from "react";
import useAudio from "../../hooks/useAudio";
import Tooltip from "../../common/tooltip/Tooltip";

const Module = ({
  id,
  src,
  animations,
  clickable,
  information,
  handleOnMouseLeave,
  handleModuleClick,
}) => {
  const [showAnimation, setshowAnimation] = useState(false);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const animationRef = useRef(null);
  const [playing, toggle] = useAudio(animations?.[0]?.sound);

  const isAnyAnimationOverlay = () =>
    animations.find((animation) => animation.overlay);

  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
    setCount(count + 1);
  };

  const handleClick = () => {
    if (clickable) {
      handleClose();
      setshowAnimation(true);
      // handleModuleClick();
      toggle();
    }
  };

  const handleLeave = () => {
    if (!isAnyAnimationOverlay()) {
      setshowAnimation(false);
      handleOnMouseLeave();
      if (playing) {
        toggle();
      }
    }
    handleClose();
  };

  const handleCloseOverlayAnimation = () => {
    setshowAnimation(false);
    handleOnMouseLeave();
    toggle();
  };

  const getMediaContent = (animation) => {
    switch (animation.type) {
      case "video":
        return (
          <video
            id={animation.id}
            ref={animationRef}
            src={animation.src}
            onMouseLeave={
              animation.overlay ? handleCloseOverlayAnimation : undefined
            }
            type="media/webm"
            loop={animation.loop || false}
            muted={animation.muted ? true : false}
            onEnded={() => setshowAnimation(false)}
            autoPlay
          ></video>
        );
      case "image":
        return (
          <img
            id={animation.id}
            src={animation.src}
            onMouseLeave={
              animation.overlay ? handleCloseOverlayAnimation : undefined
            }
            loop={animation.loop || false}
          />
        );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        animationRef.current &&
        !animationRef.current.contains(event.target)
      ) {
        handleLeave && handleLeave();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleLeave]);

  return (
    <>
      <div
        className={`module-image ${id}`}
        onClick={animations ? handleClick : undefined}
        onMouseEnter={clickable ? handleOpen : undefined}
        onMouseLeave={clickable ? handleLeave : undefined}
      >
        <img src={src} alt={id} />
        {open && information && <Tooltip information={information} />}
        {/* {true && id === "paint" && <Tooltip information={information} />} */}
      </div>
      {showAnimation &&
        animations &&
        animations.map((animation) => {
          return (
            <div
              key={animation.id}
              className="module-animation"
              onMouseLeave={animation.overlay ? handleLeave : undefined}
            >
              {getMediaContent(animation)}
            </div>
          );
        })}
      {/* {true &&
        id === "paint" &&
        animations.map((animation) => {
          return (
            <div
              className="module-animation"
              onMouseLeave={animation.overlay ? handleLeave : undefined}
            >
              {getMediaContent(animation)}
            </div>
          );
        })} */}
    </>
  );
};

export default Module;
