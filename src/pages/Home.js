import React from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import "./sass/Home.scss";
function Home() {
  return (
    <div className="home">
      <Nav searchBar />
      <div className="home__container">
        <div className="hone__row">
          <h3>Trending</h3>
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            {/* <Card /> */}
          </div>
        </div>

        <div className="hone__row">
          <h3>Restaurants for You</h3>
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
