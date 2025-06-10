import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="pizza-pic"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-title"> {name}</h3>
      <h4 className="res-menu">{cuisines.join(", ")}</h4>
      <h4 className="res-stars">{avgRating} stars</h4>
      <h4 className="res-eta">{deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
