import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import HeadlineRoller from "../Components/HeadlineRoller";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="max-w-7xl mx-auto bg-gray-200 border py-2">
          <HeadlineRoller></HeadlineRoller>
        </section>
      </header>
      <navbar>
        <Navbar></Navbar>
      </navbar>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
