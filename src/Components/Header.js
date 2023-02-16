import Logo from "../Assets/img/logo.jpg";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <>
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-28 px-2" />
      </Link>
    </>
  );
};

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="flex flex-col justify-between bg-pink-50 shadow-md m-2 p-5 items-center sm:flex-row">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10 px-10 ">
            <Link to="/">
              <li className="px-2 hover:font-bold">Home</li>
            </Link>
            <Link to="/about">
              <li className="px-2 hover:font-bold">About</li>
            </Link>
            <Link to="/contact">
              <li className="px-2 hover:font-bold">Contact</li>
            </Link>
            <Link to="/instamart">
              <li className="px-2 hover:font-bold">Instamart</li>
            </Link>
            <Link to="/cart">
              <li className="px-2 hover:font-bold">
                Cart- {cartItems.length} items
              </li>
            </Link>
          </ul>
        </div>
        <span className="font-bold p-10 text-red-900">{user.name}</span>

        {loggedIn ? (
          <button
            className="bg-purple-900 h-10 p-2 rounded-md w-20 text-white hover:bg-purple-500"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-purple-900 h-10 p-2 rounded-md w-20 text-white hover:bg-purple-500"
            onClick={() => setLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
