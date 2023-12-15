import React from "react";
import axios from "axios";

const LandingPage = ({ currentUser }) => {
  return <div>Index Route</div>;
};

LandingPage.getInitialProps = async () => {
  const response = await axios.get("/api/users/currentuser");

  return response.data;
};

export default LandingPage;
