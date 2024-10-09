import { Helmet } from "react-helmet-async";
import img from "../../assets/menu/banner3.jpg";
import useMenu from '../../Hooks/useMenu';
import SectionTitle  from "../../Components/SectionTitle/SectionTitle";
import Cover from "../Shared/Cover/Cover";
import MenuCategory from "./MenuCategory/MenuCategory";
import useCategory from "../../Hooks/useCategory";
const Menu = () => {
  const [menu] = useMenu();
  const para = [
    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  ];
  
 const offered=menu.filter(item=>item.category==="offered")

  const { categories, categoryNames, images } = useCategory();
  
  return (
    <div className="mt-22 mb-22">
      <Helmet>
        <title>Fairy | Our Menu</title>
      </Helmet>
      <Cover img={img} name="our menu" para="WOULD YOU LIKE TO TRY A DISH?" />
      <SectionTitle heading="Today's offer" subheading="Don't miss it!" />
      
      {/* Only for offered Items */}
      <MenuCategory items={offered} />

      {categories.map((cat, i) => (
        <div key={i} className="space-y-8 mt-4 mb-4">
          <MenuCategory para={para[i]} image={images[i]} items={cat} name={categoryNames[i]} />
        </div>
      ))}
    </div>
  );
};

export default Menu;




