import React, { useState, useEffect, useRef } from "react";
import useAudio from "../../hooks/useAudio";
import Tooltip from "../../common/tooltip/Tooltip";

const Module = ({
  id,
  src,
  animation,
  clickable,
  styles,
  information,
  loopCount,
  cleanLoopCount,
  incrementLoop,
  handleOnMouseLeave,
  handleModuleClick,
}) => {
  const [showAnimation, setshowAnimation] = useState(false);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const animationRef = useRef(null);
  const [playing, toggle] = useAudio(animation?.sound);

  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
    setCount(count + 1);
    if (id === "left-speaker" || id === "right-speaker") {
      incrementLoop(id);
    }
  };

  const handleClick = () => {
    handleClose();
    setshowAnimation(true);
    handleModuleClick();
    if (animation?.sound && !animation?.src) {
      return;
    }
    toggle();
  };

  const handleLeave = () => {
    if (showAnimation && !animation?.isFullPage) {
      setshowAnimation(false);
      handleOnMouseLeave();
    } else {
      handleClose();
    }
    if (showAnimation && !animation?.isFullPage) {
      toggle();
    }
  };

  const handleCloseFullPageAnimation = () => {
    setshowAnimation(false);
    handleOnMouseLeave();
  };

  const getMediaContent = () => {
    switch (animation.type) {
      case "video":
        return (
          <video
            id={id}
            ref={animationRef}
            src={animation.src}
            onMouseLeave={
              animation.isFullPage ? handleCloseFullPageAnimation : undefined
            }
            type="media/webm"
            loop
            autoPlay
            muted
          ></video>
        );
      case "image":
        return (
          <img
            id={id}
            src={animation.src}
            onMouseLeave={
              animation.isFullPage ? handleCloseFullPageAnimation : undefined
            }
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

  useEffect(() => {
    if (
      playing &&
      !showAnimation &&
      (id !== "left-speaker" || id === "right-speaker")
    ) {
      toggle();
    }
  }, [playing, showAnimation]);

  useEffect(() => {
    if (
      loopCount.left === 3 &&
      loopCount.right === 3 &&
      (id === "left-speaker" || id === "right-speaker")
    ) {
      toggle();
      cleanLoopCount();
    }
  }, [loopCount]);

  return (
    <>
      <div
        className={`module-image ${id}`}
        onClick={animation ? handleClick : undefined}
        onMouseEnter={clickable ? handleOpen : undefined}
        onMouseLeave={clickable ? handleLeave : undefined}
      >
        <img src={src} />
        {open && (
          <Tooltip
            information={information}
            top={styles.top}
            bottom={styles.bottom}
            left={styles.left}
            right={styles.right}
            maxHeight={styles.maxHeight}
          />
        )}
        {/* {(id === "right-speaker" || id === "left-speaker") && (
          <div className="loop-triangle">
            {count === 1 && <img className="bottom" />}
            {count === 2 && <img className="left" />}
            {count === 3 && <img className="right" />}
          </div>
        )} */}
      </div>
      {showAnimation && animation && (
        <div className="module-animation">{getMediaContent()}</div>
      )}
      {/* {(id === "right-speaker" || id === "left-speaker") && (
        <p style={{ position: "absolute", top: 0, right: "250px" }}>
          Loop Count: {loopCount.left} {loopCount.right}
        </p>
      )} */}
    </>
  );
};

export default Module;
