import React from "react";

const signup = () => {
  return (
    <form>
      <h1>Sign Up</h1>
      <div className='form-group'>
        <label>Email Address</label>
        <input className='form-control' />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input className='form-control' type='password' />
      </div>
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
};

export default signup;
