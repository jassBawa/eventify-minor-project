import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function ImageWrapper({ src }) {
  return (
    <motion.div
      className="image-wrapper relative h-60 w-full"
      initial={{ opacity: 0, translateX: 100 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1, translateX: 0 }}
      // whileInView={{ opacity: 1, translateX: 0 }}
    >
      <Image
        src={src}
        fill
        alt="gallery1"
        className="absolute h-[90%] w-full object-cover hover:scale-110 hover:z-10 outline hover:outline-4 hover:outline-emerald-200 transition-all duration-300 ease-out  "
      />
    </motion.div>
  );
}

export default ImageWrapper;
