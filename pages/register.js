import React, { useEffect } from "react";
import LoginForm from "@/components/shared/LoginForm";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import RegisterForm from "@/components/shared/RegisterForm";

function Register() {
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
        <RegisterForm />
      </main>
    </>
  );
}

export default Register;
