import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  //State Variable

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  //Normal varaible
  // let listOfRestaurant=[];

  const [searchText, setSearchText] = useState("");

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

    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
         
          <Link
          key={restaurant.info.id}
          to={"/restaurants/" + restaurant.info.id}
        >
          <RestaurantCard resData={restaurant.info} />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
//<RestaurantCard key={restaurant.info.id} resData={restaurant.info} />