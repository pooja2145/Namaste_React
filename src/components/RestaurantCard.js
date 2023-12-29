const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurantCard" style={styleCard}>
      <img
        alt="res-logo"
        className="resLogo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/btea7jwuwkbgd0nebcyd"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.locality}</h4>
    </div>
  );
};

export default RestaurantCard;
