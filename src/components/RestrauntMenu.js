import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // reading id from the browser url
import { IMG_CDN_URL } from "./config";
import { ShimmerComponent } from "./ShimmerUI";
const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  async function fetchMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=32.7060625&lng=74.8803125&menuId=" +
        id
    );
    const json = await data.json();
    setMenuData(json.data);
  }

  return !menuData ? (
    <ShimmerComponent />
  ) : (
    <div className="menu">
      <div>
        <h1>{menuData.name}</h1>
        <img
          src={IMG_CDN_URL + menuData.cloudinaryImageId}
          alt={menuData.data}
        />
        <h3>{menuData.area}</h3>
        <h3>{menuData.city}</h3>
        <h3>{menuData.avgRating}</h3>
        <h3>{menuData.costForTwoMsg}</h3>
      </div>
      {/* object values making it in array */}
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(menuData?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
