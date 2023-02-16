import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import React from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <div>
          <h1>Restaurant:{id}</h1>
          <h2>{restaurant.name}</h2>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
          <h3>{restaurant?.area}</h3>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.avgRating} Stars</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div className="p-5">
          <h1>Menu</h1>
          <ul>
            {Object.values(restaurant?.menu?.items)?.map((item) => (
              <li key={item?.id}>
                {item?.name}
                <button
                  className="p-2 m-2 bg-green-500"
                  onClick={() => addFoodItem(item)}
                >
                  Add Item
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
