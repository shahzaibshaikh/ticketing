import React from "react";
import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <div>Index Route</div>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === "undefined") {
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser"
    );
    return data;
  } else {
    const { data } = await axios.get("/api/users/currentuser");
    return data;
  }

  return {};
};

export default LandingPage;
