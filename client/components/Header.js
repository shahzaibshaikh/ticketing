import React from "react";
import Link from "next/link";

const Header = ({ currentUser }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <Link href='/'>
        <a className='navbar-brand'>GitTix</a>
      </Link>
    </nav>
  );
};

export default Header;
