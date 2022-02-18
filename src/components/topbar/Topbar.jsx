import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            brown.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>(240) 204-2927</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>matthewbrown0798@gmail.com</span>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}
