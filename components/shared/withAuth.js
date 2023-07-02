import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const requireAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);

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
