"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./socialMedia.css";

export default function SocialMedia({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="icon-container">
        <a
          className="icon-link"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="tooltip-text">Facebook</span>
          <span className="icon-wrap">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </span>
        </a>
        <a
          className="icon-link"
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="tooltip-text">Twitter</span>
          <span className="icon-wrap">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </span>
        </a>
        <a
          className="icon-link"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="tooltip-text">Instagram</span>
          <span className="icon-wrap">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </span>
        </a>
        <a
          className="icon-link"
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="tooltip-text">YouTube</span>
          <span className="icon-wrap">
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </span>
        </a>
        <a
          className="icon-link"
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="tooltip-text">GitHub</span>
          <span className="icon-wrap">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </span>
        </a>
      </div>
    </div>
  );
}
