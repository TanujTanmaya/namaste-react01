import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  //console.log(props.data[0].card.card.title);

  // const[showItem,setShowItem]=useState(false);

  console.log(data);
  console.log(data.card.card.title);

  const handleClick=()=>{
    console.log("Clicked");
    // setShowItem(!showItem);

    setShowIndex();

    
  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.card.card.title} ({data.card.card.itemCards.length})
          </span>
          <span>@</span>
        </div>

        {showItems && <ItemList items={data?.card?.card?.itemCards} /> }
      </div>
    </div>
  );
};

export default RestaurantCategory;
