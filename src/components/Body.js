import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RestrauntCard } from "./RestrauntCard";
import { ShimmerComponent } from "./ShimmerUI";
// hooks is a normal functions

export default Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  useEffect(() => {
    getRestaurants();
  }, []);
  //if no depenedency is added then it will be called on every render.

  //cdn is used for storing img

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.7060625&lng=74.8803125&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  // conditional rendering:-
  return !allRestaurants ? (
    <ShimmerComponent />
  ) : (
    <>
      <div className=" my-5 shadow-lg border border-cyan-900">
        <input
          type="text"
          className="focus:bg-slate-200 focus:text-black"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-green-400 rounded-md hover:first-letter:font-bold  border hover:bg-green-600"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className=" flex flex-wrap ">
        {filterRestaurants && filterRestaurants?.length === 0 ? (
          <h1>No Restaurant match you filter! </h1>
        ) : (
          filterRestaurants?.map((restaurant) => {
            return (
              <Link
                to={`/restaurant/${restaurant.data.id}`}
                key={restaurant.data.id}
              >
                <RestrauntCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
