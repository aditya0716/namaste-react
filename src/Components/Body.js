import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const { user, setUser } = useContext(UserContext);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline,please check your internet connection</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          className="py-2 pl-4 rounded-md bg-gray-50 "
          type="search"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-purple-500"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          className="p-2 m-2"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          className="p-2 m-2"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="flex flex-wrap gap-8">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurant</h1>
        ) : (
          filteredRestaurants?.map((restaurant) => (
            <Link
              to={"restaurant/" + restaurant?.data?.id}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant?.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
