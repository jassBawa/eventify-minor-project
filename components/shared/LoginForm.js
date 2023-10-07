import useFormValidation from "@/hooks/useFormValidation";
import { adminLogin } from "@/services/api";
import { setAdminData, setLoggedIn } from "@/store/slices/adminSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

function validate(formData) {
  let errors = {};
  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email address is invalid";
  }
  if (!formData.password) {
    errors.password = "Password is required";
  }
  return errors;
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erros, setErrors] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await adminLogin({
      email,
      password,
    });

    if (res) {
      toast.success("Logged In");
      localStorage.setItem("accessToken", res.token);
      dispatch(
        setAdminData({ name: res.name, email: res.email, loggedIn: true })
      );

      router.push("/dashboard");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="h-screen">
      <div className="-mt-16 grid grid-cols-2 h-full">
        <div className="relative mb-12 mt-12 w-full  ">
          <Image
            src="/mobile-login.jpg"
            className=" object-contain absolute"
            fill
            alt="Sample image"
          />
        </div>

        <div className="mb-12 flex justify-center items-center w-full ">
          <div className="w-[75%] bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-12">
              <h2 className="text-3xl font-bold mb-2  text-indigo-500">
                Login to your account
              </h2>
              <p className="text-gray-400 text-sm text-justify pr-4 mt-4">
                Manage college society events with ease! Perform CRUD operations
                for events and generate Excel files with registered user
                details. Join us for seamless event management
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mt-8 mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <p className="text-xs text-gray-400">
                  By signing up, you agree to our Terms and Policies.
                </p>
                <button
                  className="bg-indigo-400 w-full mt-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
