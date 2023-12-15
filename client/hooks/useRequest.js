import axios from "axios";
import { useState } from "react";

export default useRequest = ({ url, method, body }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      const response = await axios[method](url, body);
      return response.data;
    } catch (error) {
      setErrors(
        <div className='alert alert-danger my-2'>
          <h4>Oops...</h4>
          <ul className='my-0'>
            {error.response.data.errors.map(error => (
              <li key={error.message}>{error.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
