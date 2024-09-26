const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info?.id}
          className="pp-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 cursor-default">
          <div className="py-2">
            <span>{item.card.info?.name}</span>
            <span>{item?.card?.info?.category}</span>
          </div>
          <p className="text-xs text-left">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-3 ">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
            <img src={"https://media-assets.swiggy.com/"+ item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
