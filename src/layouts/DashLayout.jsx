import { NavLink, Outlet } from "react-router-dom";
import DashNav from "../shared/DashNav/DashNav";
import { MdDashboard } from "react-icons/md";
import { GoProject } from "react-icons/go";
import "../custom.css";

const DashLayout = () => {
  return (
    <>
      {/* Dashboard Navbar */}
      <nav className="pt-3 pb-5 border-b">
        <DashNav />
      </nav>
      {/* Dashboard */}
      <div className="container mx-auto px-5 pt-10">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="col-span-2">
            <div>
              <ul className="space-y-4">
                <li>
                  <NavLink className="flex gap-3 items-center px-2 py-2 rounded-md hover:bg-green-500 transition-colors hover:text-white" to="/dashboard" end>
                    <MdDashboard />
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex gap-3 items-center px-2 py-2 rounded-md hover:bg-green-500 transition-colors hover:text-white" to="/dashboard/projects" end>
                    <GoProject />
                    Projects
                    </NavLink>
                </li>
              </ul>
            </div>
          </aside>
          {/* Main Content */}
          <main className="col-span-10">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashLayout;
