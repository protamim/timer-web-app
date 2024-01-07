import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <Outlet />
        </>
    );
};

export default MainLayout;