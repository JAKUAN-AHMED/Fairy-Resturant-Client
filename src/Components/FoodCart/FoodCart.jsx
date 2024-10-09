const FoodCart = ({ item }) => {
  const { name, recipe, category, price, image } = item;
  return (
    <div className="card bg-salte-100 font-cinzel shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <p className="absolute right-[15%] top-[10%] p-2 lg:p-0 bg-gray-900 text-white">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-inter">{name}</h2>
        <p className="text-2xl">{category}</p>
        <p className="text-base">{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary bg-[#111827] text-[#BB8506]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
