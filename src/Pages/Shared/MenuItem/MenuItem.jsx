const MenuItem = ({item}) => {
    const { name, price, recipe ,image} = item;
    return (
      <div className="font-cinzel space-y-2 lg:flex space-x-4 p-4">
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-[80px] pl-2"
          src={image}
          alt=""
        />
        <div >
          <div className="lg:flex items-center justify-between">
            <h2 className="font-normal text-2xl">
              {name} <span className="text-red-400">----------</span>
            </h2>
            <p className="text-red-600 text-xl">${price}</p>
          </div>
          <p className="text-[#737373]">{recipe}</p>
        </div>
      </div>
    );
};

export default MenuItem;