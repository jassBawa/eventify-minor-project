import AboutHero from "@/components/About/AboutHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import React from "react";

function AboutUs() {
  return (
    <>
      <Head>
        <title>Eventify</title>
      </Head>
      <main>
        <Navbar />
        <AboutHero />
      </main>

      <Footer />
    </>
  );
}

export default AboutUs;
