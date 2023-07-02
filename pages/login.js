import LoginForm from "@/components/shared/LoginForm";
import Navbar from "@/components/layout/Navbar";
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
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
