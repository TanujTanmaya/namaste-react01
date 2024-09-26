import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      name,
      avgRating,
      cuisines,
      costForTwo,
      locality
    } = resData;

    const {loggedInUser}=useContext(UserContext)
    
  
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg"
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/07701108-310f-4e02-9ea4-461f172cce46_929734.JPG"
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{locality}</h4>
        <h4>User: {loggedInUser}</h4>
      </div>
    );
  };


  //High Order Component

  //input-restaurantcard ===>> output- restaurant card opened


  export const withOpenLabel=(RestaurantCard)=>{

    return (props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Opened</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }

  }

  export default RestaurantCard;