
const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      name,
      avgRating,
      cuisines,
      costForTwo,
      locality
    } = resData;

    
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/07701108-310f-4e02-9ea4-461f172cce46_929734.JPG"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{locality}</h4>
      </div>
    );
  };

  export default RestaurantCard;