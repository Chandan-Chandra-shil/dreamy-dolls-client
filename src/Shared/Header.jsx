import React, { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { GiftIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const { user ,logOut } = useContext(AuthContext)
  
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
      console.log(error.message)
    })
  }
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allToys"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Blog
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <NavLink
              to="/myToys"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addAToys"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Add A Toy
            </NavLink>
          </li>
          <div className='flex items-center gap-4'>
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="" />
              </div>
            </div>
            <li>
              <button
                onClick={handleLogOut}
                className="btn btn-outline btn-primary hover:bg-purple-500 "
              >
                Log out
              </button>
            </li>
          </div>
        </>
      ) : (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? " text-white" : "")}
          >
            <button className="btn btn-outline btn-primary hover:bg-purple-500 ">
              Login
            </button>
          </NavLink>
        </li>
      )}
    </>
  );
  
  return (
    <nav className=" bg-purple-200 shadow-sm font-semibold">
      <div className="navbar container mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a  className=" hover:text-primary normal-case font-mono font-extrabold text-xl flex items-center gap-5">
            <GiftIcon className="h-12 w-12 text-purple-600" /> Dreamy Dolls
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;