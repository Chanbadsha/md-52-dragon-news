import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul
        tabIndex={0}
        className="menu menu-sm  bg-base-100 rounded-box z-[1] mt-3  p-2 "
      >
        <nav className="flex gap-4 items-center justify-center">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>

          <li>
            <NavLink to={"/career"}>Career</NavLink>
          </li>
        </nav>
      </ul>
    </div>
  );
};

export default Navbar;
