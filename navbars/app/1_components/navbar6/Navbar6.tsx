"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import "./navbar6.css";
import Link from "next/link";

export default function Navbar6() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuClass = isMobileMenuOpen
    ? "navbar6-mobile-menu active"
    : "navbar6-desktop-menu";

  const toggleMenu = (
    menuSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    menuSetter((prevState: boolean) => !prevState);
  };

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAboutOpen(false);
    setContactOpen(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar6-container")) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="navbar6-container">
      <Link href="#" className="navbar6-link">
        <Logo />
      </Link>
      <div
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="hamburger-menu"
      >
        ☰
      </div>
      <div className={menuClass}>
        <Link
          href="#"
          className="navbar6-link nav-item"
          onClick={(e) => {
            e.preventDefault();
            toggleMenu(setServicesOpen);
          }}
        >
          Services
          {servicesOpen && (
            <div className="dropdown-menu">
              <Link
                href="#"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Users
              </Link>
              <Link
                href="#"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Organizations
              </Link>
              <Link
                href="#"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Market Monitoring
              </Link>
            </div>
          )}
        </Link>
        <Link
          href="#"
          className="navbar6-link nav-item"
          onClick={() => {
            closeMobileMenu();
          }}
        >
          News
        </Link>
        <Link
          href="#"
          className="navbar6-link warnings"
          onClick={() => {
            closeMobileMenu();
          }}
        >
          Warnings
        </Link>
        <Link
          href="#"
          className="navbar6-link results"
          onClick={() => {
            closeMobileMenu();
          }}
        >
          RESULTS
        </Link>
        <Link
          href="#"
          className="navbar6-link nav-item"
          onClick={() => {
            closeMobileMenu();
          }}
        >
          Policy
        </Link>
        <Link
          href="#"
          className="navbar6-link nav-item"
          onClick={(e) => {
            e.preventDefault();
            toggleMenu(setAboutOpen);
          }}
        >
          About
          {aboutOpen && (
            <div className="dropdown-menu">
              <Link
                href="#"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                About
              </Link>
              <Link
                href="#"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Partners
              </Link>
            </div>
          )}
        </Link>
        <Link
          href="#"
          className="navbar6-link nav-item"
          onClick={(e) => {
            e.preventDefault();
            toggleMenu(setContactOpen);
          }}
        >
          Contact
          {contactOpen && (
            <div className="dropdown-menu">
              <Link
                href="#"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Job Openings
              </Link>
              <Link
                href="#"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Suggest a Vendor/Substance
              </Link>
            </div>
          )}
        </Link>
        <Link
          href="#"
          className="navbar6-link espanol"
          onClick={() => {
            closeMobileMenu();
          }}
        >
          Espanol
        </Link>
      </div>
    </div>
  );
}
