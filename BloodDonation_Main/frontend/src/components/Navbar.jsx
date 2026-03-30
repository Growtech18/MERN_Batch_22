
import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setToken } from "../redux/slices/authSlice";


const Navbar = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    console.log("this code will run", token)
  }, [token])


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Blood Bank </Link>
      </div>

      <ul className="navbar-links">

        <>
          {
            token && <>
              <li>
                <Link to="/donate">Donate Khoon</Link>
              </li>

              <li>
                <Link to="/collect">Collect Khoon</Link>
              </li>
            </>
          }

        </>
        {
          token === undefined ? (<>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>) :
            (<li onClick={() => {
              console.log("click hua")
              dispatch(setToken(undefined))
              localStorage.removeItem("token")
            }}>
              Logout
            </li>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;
