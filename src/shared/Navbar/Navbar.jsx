import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <nav>
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link>
              <span className="text-3xl font-semibold">Timer</span>
            </Link>
            {/* Navlinks */}
            <ul className="flex items-center gap-6">
              <li>
                <NavLink
                  to="/features"
                  className="text-slate-700 hover:text-slate-900"
                >
                  Features
                </NavLink>
              </li>
              {/* Checks user */}
              {user ? (
                <>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="text-slate-700 hover:text-slate-900"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <span>
                      <img className="w-12 rounded-full" src={user?.photoURL} alt="protamim" />
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className="text-slate-700 hover:text-slate-900"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/sign-up"
                      className="bg-green-500 border border-green-500 hover:bg-transparent hover:text-black transition-colors px-5 py-2 rounded-lg text-white"
                    >
                      Get Started
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
