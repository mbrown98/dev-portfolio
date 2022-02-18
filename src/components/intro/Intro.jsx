import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Developer", "Enthusiast"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/bit.png" alt="bitmoji" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Matthew Brown</h1>
          <h3>
            Software <span ref={textRef} />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="Down" />
        </a>
      </div>
    </div>
  );
}
