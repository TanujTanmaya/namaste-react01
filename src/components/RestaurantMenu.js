import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState({});
  // const [cardname, setCard] = useState([]);

  const { resId } = useParams();

  let resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // console.log(resInfo[0].data.cards[2].card.card.info.name);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId
  //   );
  //   //393840
  //   //656392
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json?.data?.cards[2]?.card?.card?.info);
  //   setCard(
  //     json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //       ?.card?.itemCards
  //   );
  // };
  console.log(
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo?.data?.cards[2]?.card?.card?.info?.name}
      </h1>
      <p className="font-bold text-lg">
        {resInfo?.data?.cards[2]?.card?.card?.info?.cuisines + ", "} -{" "}
        {resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>

      {categories?.length > 0 ? (
        categories.map((category, index) => (
          <RestaurantCategory
            data={category}
            key={index}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=> setShowIndex(index)}
          />
        ))
      ) : (
        <p>No categories found</p>
      )}
    </div>
  );
};

export default RestaurantMenu;

{
  /* <h2>Menu</h2>
      <ul>
        {resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(
          (item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          )
        )}
      </ul> */
}
