import React from "react";
import "./gallery.css";

export default function Gallery() {
  const images = [
    "/img/img1.jpg",
    "/img/img2.jpg",
    "/img/img3.jpg",
    "/img/img4.jpg",
    "/img/img5.jpg",
    "/img/img6.jpg",
    "/img/img7.jpg",
    "/img/img8.jpg",
    "/img/img9.jpg",
  ];

  const angle = 360 / images.length;

  return (
    <div className="box">
      {images.map((imgSrc, index) => (
        <span
          key={index}
          style={{
            transform: `rotateY(${angle * index}deg) translateZ(400px)`,
            animationDelay: `-${(46 / images.length) * index}s`,
          }}
          // number 46 is the speed of rotating. If you change it,
          // you must change also in css this line:
          // "animation: animateImage 46s linear infinite;"
        >
          <img
            src={imgSrc}
            alt={`Image ${index + 1}`}
            width="200"
            height="300"
          />
        </span>
      ))}
    </div>
  );
}
