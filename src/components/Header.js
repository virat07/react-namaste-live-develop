import { useState, useContext } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Title = () => (
  <a tp="/">
    <img className=" h-12 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = ({ setLogin }) => {
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  return (
    <div className=" sm:block md:bg-teal-300 sm:bg-blue-300  md:flex md:justify-between space-y-7 bg-slate-600 shadow-lg">
      <Title />
      <div>
        <ul className="flex py-10 justify-between">
          <Link className="px-2" to="/">
            Home
          </Link>
          <Link className="px-2" to="/about">``
            About
          </Link>
          <Link className="px-2" to="/contact">
            Contact
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link>Cart</Link>

          <button className="px-2" onClick={() => setLogin()}>
            Logout
          </button>
          <div className="flex ">
            <h1>{isOnline ? "✅" : "🔴"}</h1>
            <h5>{isOnline ? user.name : "Offline"}</h5>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Header;
//Link tag:-
