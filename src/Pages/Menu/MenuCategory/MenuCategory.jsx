import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
const MenuCategory = ({items,name,para,image}) => {
    return (
      <div className="pt-8 text-center">
        {name && <Cover img={image} name={name} para={para}></Cover>}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <MenuItem key={idx} item={item}></MenuItem>
          ))}
       </div>
        <Link to={`/order/${name}`}>
          <button className="btn btn-square w-[30%] lg:w-[10%] border-b-2 border-b-black shadow-lg font-inter mt-4 mb-4 hover:border-b-[#B026FF] & text-black">
            Order
          </button>
        </Link>
      </div>
    );
};

export default MenuCategory;