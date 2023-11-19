import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const requireAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    // const token = localStorage.getItem("accessToken");
    const token = useSelector((state) => state.user.token);
    const isLoggedIn = token ? true : false;

    useEffect(() => {
      if (!isLoggedIn) {
        router.push("/login");
      }
    }, [isLoggedIn, router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default requireAuth;
