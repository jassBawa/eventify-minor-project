import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Eventify</title>
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Events />
      </main>
    </>
  );
}
