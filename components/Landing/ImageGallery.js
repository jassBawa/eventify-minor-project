import React from "react";
import ImageWrapper from "./ImageWrapper";
import { motion } from "framer-motion";

function ImageGallery() {
  return (
    <section className="text-gray-600 mt-24 body-font h-screen relative z-50 mx-auto ">
      <div
        className="grid gap-4 grid-cols-4 -skew-y-3 py-10"
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          overflowX: "scroll",
        }}
      >
        <ImageWrapper src="/gallery-one.jpg" />
        <ImageWrapper src="/gallery-two.jpeg" />
        <ImageWrapper src="/gallery-three.jpeg" />
        <ImageWrapper src="/gallery-four.jpeg" />
        <ImageWrapper src="/gallery-five.jpeg" />
        <ImageWrapper src="/gallery-six.jpeg" />
        <ImageWrapper src="/gallery-seven.jpeg" />
        <ImageWrapper src="/gallery-eight.jpeg" />
      </div>
    </section>
  );
}

export default React.memo(ImageGallery);
