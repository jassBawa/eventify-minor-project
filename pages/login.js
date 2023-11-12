import LoginForm from "@/components/shared/LoginForm";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Login() {
  const router = useRouter();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (token) router.push("/dashboard");
  }, [router]);

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
