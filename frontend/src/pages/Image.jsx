import { useRef } from "react";

export default function Image() {
  const element = useRef(null);

  const toggleFullScreen = () => {
    const isFullScreen = document.fullscreenElement;

    if (!isFullScreen) {
      element.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="image" ref={element}>
            <button id="fullscreen-btn" onClick={toggleFullScreen}>
              toggle
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
