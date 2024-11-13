import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HeadlineRoller = () => {
  return (
    <div className="flex gap-1 pr-4">
      <p className="bg-red-500 py-2 px-4  ml-2 rounded-lg">Latest</p>
      <Marquee pauseOnHover={true}>
        <Link className="hover:underline mr-2" to="/news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          placeat.
        </Link>
        <Link className="hover:underline mr-2" to="/news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          placeat.
        </Link>
        <Link className="hover:underline mr-2" to="/news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          placeat.
        </Link>
        <Link className="hover:underline mr-2" to="/news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          placeat.
        </Link>
      </Marquee>
    </div>
  );
};

export default HeadlineRoller;
