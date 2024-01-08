import { Link } from "react-router-dom";
import userPlaceholder from "../../assets/images/user-placeholder.webp";

const DashNav = () => {
  return (
    <>
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center">
            <Link to="/">
              <span className="text-3xl font-semibold">Timer</span>
            </Link>
            <span>
              <img className="w-12" src={userPlaceholder} alt="" />
            </span>
          </div>
        </div>
    </>
  );
};

export default DashNav;
