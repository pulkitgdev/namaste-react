import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// Not using keys (not accepting) <<<< index as key <<<< unique id (best practice)
const Body = () => {
  return (
    <div className="body">
      <button className="filter-btn" onClick={() => {
        console.log('Filter By Rating')
      }}>Top Rated Restaurant</button>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
