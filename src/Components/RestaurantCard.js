import { IMG_CDN_URL } from "../constants";
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="w-56 p-2 m-2 shadow-md bg-pink-50 hover:shadow-lg">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
        <h5 className="font-bold">
          {user.name}-{user.email}
        </h5>
      </div>
    </>
  );
};

export default RestaurantCard;
