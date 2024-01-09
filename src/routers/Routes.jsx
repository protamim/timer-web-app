import { Link, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import DashLayout from "../layouts/DashLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Projects from "../pages/Dashboard/Projects/Projects";
import Timer from "../pages/Dashboard/Timer/Timer";

const Routes = createBrowserRouter([
  // Main Routes
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
  // Dashboard Routes
  {
    path: "/dashboard",
    element: <DashLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/dashboard/projects",
        element: <Projects />
      },
      {
        path: "/dashboard/timer",
        element: <Timer />
      }
    ]
  }
]);

export default Routes;
