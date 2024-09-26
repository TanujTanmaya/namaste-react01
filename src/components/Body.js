import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Body = () => {
  //State Variable

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  //Normal varaible
  // let listOfRestaurant=[];

  const [searchText, setSearchText] = useState("");

  const RestaurantCardOpen = withOpenLabel(RestaurantCard); //high order component function [withOpenLabel] inside card component

  useEffect(() => {
    fetchData();
  }, []);
  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING
  //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0446027&lng=80.2002754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  const {loggedInUser,setUserName}=useContext(UserContext)

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search  m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // const filteredRestaurant = listOfRestaurant.filter((res) =>
              //   res.info.name.toLowerCase().includes(searchText.toLowerCase())
              // );

              // setListOfRestaurant(filteredRestaurant);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              //Filter from the data which is rated more than 3.8
              let filteredList = listOfRestaurant.filter((res) => {
                return res.info.avgRating > 4.5;
              });
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>User-Name</label>
          <input type="text" className="border border-solid border-black" value={loggedInUser}  onChange={(e)=>setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.availability?.opened === true ? (
              <RestaurantCardOpen resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
//<RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
