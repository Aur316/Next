"use client";
import Link from "next/link";
import "./navbar.css";
//if You want to add more links in your website,plese add one more child in css

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/history">History</Link>
        <div className="animation start-homes"></div>
      </nav>
    </div>
  );
}
