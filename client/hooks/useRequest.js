import axios from "axios";
import { useState } from "react";

export default useRequest = ({ url, method, body }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      const response = await axios[method](url, body);
      console.log(response.data);
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return { doRequest, errors };
};
