import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            brown.
          </a>
          <div className="itemContainer"></div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}
