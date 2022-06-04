import React, { useEffect, useState } from "react";
import { getRestaurants } from "../http/index";
import Card from "../components/Card";
import Nav from "../components/Nav";
import "./sass/Home.scss";

function Home() {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    let fetchData = true;

    // console.log("check from home");
    const getdata = async () => {
      const res = await getRestaurants();
      setRestaurants(res?.data?.data);
    };
    if (fetchData) {
      getdata();
    }
    return () => {
      fetchData = false;
    };
  }, []);

  // console.log(restaurants);
  return (
    <div className="home">
      <Nav searchBar />
      <div className="home__container">
        <div className="hone__row">
          <h3>Trending</h3>
          <div>
            {restaurants?.map((el) => {
              return (
                <Card
                  key={el._id}
                  id={el._id}
                  title={el.RestaurantName}
                  img={`http://localhost:8000${el.CoverImg}`}
                  rating={el.Rating}
                  address={el.FullAdders}
                />
              );
            })}
          </div>
        </div>

        <div className="hone__row">
          <h3>Restaurants for You</h3>
          <div>
            {restaurants?.map((el) => {
              return (
                <Card
                  key={el._id}
                  id={el.RestaurantMetadataID}
                  title={el.RestaurantName}
                  img={`http://localhost:8000${el.CoverImg}`}
                  rating={el.Rating}
                  address={el.FullAdders}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
