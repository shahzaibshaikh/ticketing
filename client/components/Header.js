import React from "react";
import Link from "next/link";

const Header = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <nav className='navbar navbar-light bg-light'>
      <Link href='/' className='navbar-brand'>
        GitTix
      </Link>
      <div className='d-flex justify-content-end'>
        <ul className='nav d-flex align-items-center'>
          {currentUser ? "Sign Out" : "Sign In"}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
