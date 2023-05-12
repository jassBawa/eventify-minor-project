import React from "react";

function SingleEventHero({ image }) {
  return (
    // Hero Section
    <section>
      <div className="relative h-96 w-full">
        <img
          src={image}
          className="absolute h-full w-full object-cover "
        />
        <div className="bg-gradient-to-br bg-black opacity-70 absolute h-full w-full" />
      </div>
    </section>
  );
}

export default SingleEventHero;
