import { IMG_CDN_URL } from "./config";

export const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-56 p-2 m-2 border shadow-md ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className=" font-bold text-xl ">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};
