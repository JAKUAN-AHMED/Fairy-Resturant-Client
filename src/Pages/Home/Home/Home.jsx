import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Boss from "../Boss/Boss";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Recomendation from "../Recomendation/Recomendation";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <Helmet>
        <title>Fairy | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Boss></Boss>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <Recomendation></Recomendation>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
