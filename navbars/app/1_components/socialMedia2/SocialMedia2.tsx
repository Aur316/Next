"use client";
import React from "react";
import "./socialMedia2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia2({ className }: { className?: string }) {
  return (
    <div className={`sm2-container ${className || ""}`}>
      <ul className="sm2-ul">
        <li className="sm2-li">
          <a className="sm2-link sm2-facebook-link">
            <FontAwesomeIcon
              icon={faFacebook}
              className="sm2-icon sm2-facebook"
            />
          </a>
        </li>
        <li className="sm2-li">
          <a className="sm2-link sm2-twitter-link">
            <FontAwesomeIcon
              icon={faTwitter}
              className="sm2-icon sm2-twitter"
            />
          </a>
        </li>
        <li className="sm2-li">
          <a className="sm2-link sm2-instagram-link">
            <FontAwesomeIcon
              icon={faInstagram}
              className="sm2-icon sm2-instagram"
            />
          </a>
        </li>
        <li className="sm2-li">
          <a className="sm2-link sm2-youtube-link">
            <FontAwesomeIcon
              icon={faYoutube}
              className="sm2-icon sm2-youtube"
            />
          </a>
        </li>
        <li className="sm2-li">
          <a className="sm2-link sm2-github-link">
            <FontAwesomeIcon icon={faGithub} className="sm2-icon sm2-github" />
          </a>
        </li>
      </ul>
    </div>
  );
}
