import useFormValidation from "@/hooks/useFormValidation";
import { adminLogin } from "@/services/api";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await adminLogin({
      email, password
    })

    if (res.message) {
      toast.success('Logged In')
      localStorage.setItem('accessToken', res.token);

      router.push('/dashboard');
    }
  }


  return (
    <section className="h-screen">
      <div className="-mt-16 grid grid-cols-2 h-full">
        <div className=" mb-12  xl:w-full">
          <img
            src="/login.png"
            className="w-full"
            alt="Sample image"
          />
        </div>

        <div className="mb-12 flex justify-center items-center w-full min-w-full ">
          <form onSubmit={handleSubmit} className="min-w-[30rem]">
            <div className="relative mb-6 " data-te-input-wrapper-init>
              <input
                type="text"
                name="email"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
              <label
                htmlFor="exampleFormControlInput2"
                className="pointer-events-none absolute bg-white px-3 left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:text-primary"
              >
                Email address
              </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="password"
                name="password"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput22"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="exampleFormControlInput22"
                className="pointer-events-none absolute left-3 px-3 bg-white top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Password
              </label>
            </div>

            <div className="mb-6 flex  items-center justify-between">




              <a href="#!" className="block">Forgot password?</a>
            </div>


            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="inline-block rounded bg-indigo-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Login
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
