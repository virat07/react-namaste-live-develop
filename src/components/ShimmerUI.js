export const ShimmerComponent = () => {
  return (
    <div className="restaurant-list">
      {Array(20)
        .fill("")
        .map((e, index) => {
          return <div className="shimmerCard" key={index}></div>;
        })}
    </div>
  );
};
