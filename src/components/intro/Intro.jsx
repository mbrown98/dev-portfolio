import "./intro.scss";

export default function Intro() {
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
            Software Developer<span></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="Down" />
        </a>
      </div>
    </div>
  );
}
