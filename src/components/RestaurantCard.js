import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.card.card.info;
  const { deliveryTime } = resData?.card.card.info.sla;
  return (
    <div className="res-card">
      <div className="res-logo-wrap">
        <img className="res-logo" alt="" src={CDN_URL + cloudinaryImageId} />
      </div>
      <h4 className="res-title">{name}</h4>
      <p className="res-desc">{cuisines.join(", ")}</p>
      <p>{avgRating} Stars</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} minute</p>
    </div>
  );
};

export default RestaurantCard;
