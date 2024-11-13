import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 gap-1">
      <div className="logo">
        <img src={logo} className="w-11/12 mx-auto" alt="" />
      </div>
      <div className="title text-xl ">
        <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
          </div>
          <div className="showTime">
              <p>{ moment().format("dddd, MMMM Do YYYY")}</p>
          </div>
    </div>
  );
};

export default Header;
