import { useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import { useRouter } from "next/router";

const signout = () => {
  const router = useRouter();
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => router.push("/")
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing out...</div>;
};

export default signout;
