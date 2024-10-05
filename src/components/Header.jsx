import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-5">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-blue-200">
              View Doctors & Templates
            </Link>
          </li>
          <li>
            <Link to="/assign" className="hover:text-blue-200">
              Assign Template
            </Link>
          </li>
          <li>
            <Link to="/create" className="hover:text-blue-200">
              Create Template
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
