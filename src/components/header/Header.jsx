import "./header.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return <div className="header_container">
    <a className="header_logo_wrapper">
      <img src={logo} alt="logo" />
      <div className="header_logo_text_container">
        <span className="header_title__main">
          header_title__main
        </span>
        <span className="header_title__secondary">
          header_title__secondary
        </span>
      </div>
    </a>
  </div>
}