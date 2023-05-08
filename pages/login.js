import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

function Login() {
  return (
    <>
      <Head>
        <title>Eventify</title>
      </Head>
      <main>
        <Navbar />
        < LoginForm />
      </main>
    </>
  );
}

export default Login;
