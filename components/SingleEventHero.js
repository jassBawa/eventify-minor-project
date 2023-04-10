import React from "react";

function SingleEventHero() {
  return (
    // Hero Section
    <section>
      <div className="relative h-96 w-full">
        <img
          src="https://i0.wp.com/www.thebigday.co.in/wp-content/uploads/2021/01/Corporate-Events.jpg?w=1500&ssl=1"
          className="absolute h-full w-full object-cover "
        />
        <div className="bg-gradient-to-br from-black to-black/20 absolute h-full w-full" />
      </div>
    </section>
  );
}

export default SingleEventHero;
