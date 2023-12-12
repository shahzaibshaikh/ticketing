import axios from "axios";
import { useState } from "react";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async event => {
    event.preventDefault();

    const response = await axios.post("/api/users/signup", { email, password });
    console.log(response.data);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className='form-group'>
        <label>Email Address</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='form-control'
          type='password'
        />
      </div>
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
};

export default signup;
