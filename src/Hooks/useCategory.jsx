import img1 from "../assets/menu/dessert-bg.jpeg";
import img2 from "../assets/menu/pizza-bg.jpg";
import img3 from "../assets/menu/salad-bg.jpg";
import img4 from "../assets/menu/soup-bg.jpg";
import img5 from "../assets/menu/drinks.jpg";
import img6 from '../assets/shop/banner2.jpg'
import useMenu from "./useMenu";

const useCategory=()=>{
  const [menu]=useMenu();
  const images=[img1,img2,img3,img4,img5,img6];
  // Filter categories
  const dessert=menu.filter((item)=>item.category==="dessert");
  const salad=menu.filter((item)=>item.category==="salad");
  const soup=menu.filter((item)=>item.category==="soup");
  const pizza=menu.filter((item)=>item.category==="pizza");
  const drinks = menu.filter((item)=> item.category==="drinks");
  const offered = menu.filter((item)=> item.category==="offered");

  const categories=[dessert, pizza, salad, soup, drinks,offered];
  const categoryNames=["dessert","pizza","salad","soup","drinks","offered"]; 

  return { categories, categoryNames, images };
};

export default useCategory;
