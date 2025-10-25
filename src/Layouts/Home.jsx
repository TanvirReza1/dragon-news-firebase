import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import NavBar from "../Components/NavBar";
import LeftAside from "../Components/Home/LeftAside";
import RightAside from "../Components/Home/RightAside";
import Loading from "../Pages/Loading";

const Home = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w=11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w=11/12 mx-auto my-3">
        <NavBar></NavBar>
      </nav>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Home;
