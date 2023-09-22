"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar5.module.css";

export default function Navbar5() {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  function handleClick() {
    if (menu) {
      window.location.href = "/";
    } else {
      setMenu(true);
    }
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menu]);

  return (
    <div
      className={`${styles.container} ${menu ? styles.active : ""} ${
        menu ? styles.positioned : ""
      }`}
      ref={menuRef}
    >
      <button
        className={`${styles.button} ${menu ? styles.activeButton : ""}`}
        onClick={handleClick}
      >
        {!menu ? "Menu" : "Home"}
      </button>

      {menu && (
        <>
          <a
            className={`${styles.link} ${menu ? styles.active : ""}`}
            href="/about"
          >
            About
          </a>
          <a
            className={`${styles.link} ${menu ? styles.active : ""}`}
            href="/contact"
          >
            Contact
          </a>
          <a
            className={`${styles.link} ${menu ? styles.active : ""}`}
            href="/history"
          >
            History
          </a>
        </>
      )}
    </div>
  );
}
