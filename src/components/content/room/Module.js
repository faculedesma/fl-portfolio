import React, { useState, useEffect, useRef } from "react";

const Module = ({
  id,
  src,
  media,
  animation,
  clickable,
  handleOnMouseLeave,
  handleModuleClick,
}) => {
  const [shouldToggle, setShouldToggle] = useState(false);
  const animationRef = useRef(null);

  const handleClick = () => {
    if (clickable) {
      setShouldToggle(true);
      handleModuleClick();
    }
  };

  const handleLeave = () => {
    setShouldToggle(false);
    handleOnMouseLeave();
  };

  const getMediaContent = () => {
    switch (media) {
      case "video":
        return (
          <video
            id={id}
            ref={animationRef}
            src={animation}
            onMouseLeave={handleLeave}
            type="media/webm"
            loop
            autoPlay
            muted
          ></video>
        );
      case "image":
        return <img id={id} src={animation} onMouseLeave={handleLeave} />;
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
      <div className="module-image">
        <img src={src} className={id} onClick={handleClick} />
      </div>
      {shouldToggle && (
        <div className="module-animation">{getMediaContent()}</div>
      )}
    </>
  );
};

export default Module;
