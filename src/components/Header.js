import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
const Title = () => (
  <a tp="/">
    <img className=" h-12 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = ({ setLogin }) => {
  return (
    <div className=" sm:block md:bg-teal-300 sm:bg-blue-300  md:flex md:justify-between space-y-7 bg-slate-600 shadow-lg">
      <Title />
      <div>
        <ul>
          <Link className="px-2" to="/">
            Home
          </Link>
          <Link className="px-2" to="/about">
            About
          </Link>
          <Link className="px-2" to="/contact">
            Contact
          </Link>
          <Link>Cart</Link>

          <button className="px-2" onClick={() => setLogin()}>
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
//Link tag:-
