import React from "react";
import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <div>Index Route</div>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === "undefined") {
  } else {
    const response = await axios.get("/api/users/currentuser");
  }

  return response.data;
};

export default LandingPage;
