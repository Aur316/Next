"use client";
import React from "react";
import "./socialMedia3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia3({ className }: { className?: string }) {
  return (
    <div className={`sm3-container ${className || ""}`}>
      <ul className="sm3-list">
        <li className="facebook-icon span">
          <a href="#" className="sm3-link">
            <span></span>
            <span></span>
            <span></span>
            <span>
              <FontAwesomeIcon icon={faFacebook} className="sm3-fa-brands" />
            </span>
          </a>
        </li>
        <li className="twitter-icon span">
          <a href="#" className="sm3-link">
            <span></span>
            <span></span>
            <span></span>
            <span>
              <FontAwesomeIcon icon={faTwitter} className="fa-brands" />
            </span>
          </a>
        </li>
        <li className="instagram-icon span">
          <a href="#" className="sm3-link">
            <span></span>
            <span></span>
            <span></span>
            <span>
              <FontAwesomeIcon icon={faInstagram} className="fa-brands" />
            </span>
          </a>
        </li>

        <li className="youtube-icon span">
          <a href="#" className="sm3-link">
            <span></span>
            <span></span>
            <span></span>
            <span>
              <FontAwesomeIcon icon={faYoutube} className="fa-brands" />
            </span>
          </a>
        </li>

        <li className="github-icon span">
          <a href="#" className="sm3-link">
            <span></span>
            <span></span>
            <span></span>
            <span>
              <FontAwesomeIcon icon={faGithub} className="fa-brands" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
