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
        {/* <!-- Dark-themed card for admin access request --> */}
        <div class="bg-gray-800 rounded-lg shadow-md overflow-hidden mt-8">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-4 text-purple-500">
              Request Admin Access
            </h3>
            <p class="text-gray-300 mb-6">
              Hi Admin, I need access to the administrative tools to assist with
              event management. Granting admin access will facilitate faster
              resolution of issues and improved efficiency. Thank you!
            </p>
            <p class="text-gray-400 mb-4">
              Contact us via email:{" "}
              <a
                href="mailto:admin@example.com"
                class="text-purple-500 underline"
              >
                Eventifymanagment@gmail.com
              </a>
            </p>
            <p class="text-gray-400 text-sm">
              Please reach out via email for access requests.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
