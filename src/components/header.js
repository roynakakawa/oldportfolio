import "./header.css";
import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [active, setActive] = useState(false);

  const hToggle = () => {
    setActive(!active);
    document.body.classList.toggle("ovhidden");
  }

return(
  <div className="header_class">
     <button className="menu_button" onClick={hToggle}>
          {active ? <SlArrowUp /> : <SlArrowDown /> }
     </button>
     <div className="menu_curtain">
      <div className={active ? "nav-menu-on" : "nav-menu-off"}>
          <ul>
            <li><NavLink onClick={hToggle} to="/">Home</NavLink></li>
            <li><NavLink onClick={hToggle} to="/about">About</NavLink></li>
          </ul>
      </div>
     </div>
  </div>
);
};