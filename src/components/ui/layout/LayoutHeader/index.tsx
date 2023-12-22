import "./LayoutHeader.scss";
import Icon from "components/ui/Icon";
import { useState } from "react";

const LayoutHeader = () => {
  const [show, toggleShow] = useState(false);
  return (
    <>
      <header className="layout-header">
        <div className="logo">Steven Omole-Adebomi</div>
        {/* <ul className="layout-header__items">
            <li>Home</li>
            <li>Who I Am</li>
            <li>My Interest & Passion</li>
            <li>What I have Been Upto</li>
            <li>Pick My Brain</li>
          </ul> */}
        <div>
          <b>Hero</b>
        </div>
      </header>

      <div className="mobile-scroll-nav" onClick={() => toggleShow(!show)}>
        <Icon icon={show ? "close" : "menu"} />
      </div>

      {show && (
        <div className="mobile-menu">
          <ul>
            <li>{"->"} Hero</li>
            <li>{"->"} Experience</li>
            <li>{"->"} Career Interests</li>
            <li>{"->"} Education</li>
            <li>{"->"} Pick My Brain</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default LayoutHeader;
