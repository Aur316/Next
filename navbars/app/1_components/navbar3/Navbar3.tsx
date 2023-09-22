"use client";

// in Your real app please use <Link></Link> instead of <a> tag.

import React from "react";
import "./navbar3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faEnvelope,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar3() {
  return (
    <div className="navbar3">
      <a href="/" className="icon3-link">
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a href="/about" className="icon3-link">
        <FontAwesomeIcon icon={faInfoCircle} />
      </a>
      <a href="/contact" className="icon3-link">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="/history" className="icon3-link">
        <FontAwesomeIcon icon={faHistory} />
      </a>
    </div>
  );
}
