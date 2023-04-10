import Navbar from "@/components/Navbar";
import SingleEventDetails from "@/components/SingleEventDetails";
import SingleEventHero from "@/components/SingleEventHero";
import React from "react";

function Single() {
  return (
    <>
      <Navbar />
      <main>
        <SingleEventHero />
        <SingleEventDetails />
      </main>
    </>
  );
}

export default Single;
