import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState({});
  // const [cardname, setCard] = useState([]);

  const { resId } = useParams();

  let resInfo = useRestaurantMenu(resId);

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

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo[0].data.cards[2].card.card.info;

  // const  cardname  =
  //   resInfo[0].data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card?.card
  //     .itemCards;
  // console.log(resId);
  // console.log(cardname);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.data.cards[2].card.card.info.name}</h1>
      <p>
        {resInfo?.data.cards[2].card.card.info.cuisines + ", "} -{" "}
        {resInfo?.data.cards[2].card.card.info.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(
          (item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          )
        )}
      </ul>

      <button onClick={()=>{
        console.log(resInfo);
      }}>Click me</button>
    </div>
  );
};

export default RestaurantMenu;
