import { Link, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <h2>
        It looks like you&apos;re lost. go back <Link to="/" className="text-green-400 hover:underline">Home</Link>
      </h2>
    ),
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/sign-up",
            element: <SignUp />
        },
        {
            path: "/login",
            element: <Login />
        },
    ]
  },
]);

export default Routes;
