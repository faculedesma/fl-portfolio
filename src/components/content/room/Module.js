import React, { useState, useEffect, useRef } from "react";
import Tooltip from "../../common/tooltip/Tooltip";

const Module = ({
  id,
  src,
  animation,
  clickable,
  styles,
  information,
  handleOnMouseLeave,
  handleModuleClick,
}) => {
  const [showAnimation, setshowAnimation] = useState(false);
  const [open, setOpen] = useState(false);
  const animationRef = useRef(null);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  const handleClick = () => {
    handleClose();
    setshowAnimation(true);
    handleModuleClick();
  };

  const handleLeave = () => {
    if (showAnimation && !animation.isFullPage) {
      setshowAnimation(false);
      handleOnMouseLeave();
    } else {
      handleClose();
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

  return (
    <>
      <div className={`module-image ${id}`}>
        <img
          src={src}
          onClick={clickable ? handleClick : undefined}
          onMouseEnter={clickable ? handleOpen : undefined}
          onMouseLeave={clickable ? handleLeave : undefined}
        />
        {open && (
          <Tooltip
            content={information}
            top={styles.top}
            bottom={styles.bottom}
            left={styles.left}
            right={styles.right}
          />
        )}
      </div>
      {showAnimation && (
        <div className="module-animation">{getMediaContent()}</div>
      )}
    </>
  );
};

export default Module;
