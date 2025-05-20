import React from "react";
import "./footer.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { socialprofils } from "../content_options";

export const Footer = () => {
  return (
    <div className="stick_follow_icon">
      <p>Follow Me</p>
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter} target="_blank">
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="_blank">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blank">
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
    </div>   
  );
};
