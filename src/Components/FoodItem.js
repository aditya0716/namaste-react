import { IMG_CDN_URL } from "../constants";
import React from "react";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <>
      <div className="w-56 p-2 m-2 shadow-md bg-pink-50 hover:shadow-lg">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{description}</h3>
        <h4>Price: Rs {price / 100}</h4>
      </div>
    </>
  );
};

export default FoodItem;
