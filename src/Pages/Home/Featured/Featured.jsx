import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
const Featured = () => {
    return (
      <section
        style={{ backgroundImage: `url(${featured})` }}
        className="bg-cover py-8 overflow-hidden text-white opacity-90 bg-fixed hero-overlay bg-center"
      >
        <SectionTitle heading="From our menu" subheading="check it out" />

        <div className="grid grid-cols-1 md:grid-cols-2  text-white items-center justify-center p-4 bg-slate-950 bg-opacity-5 bg-cover hero-content">
          <figure className="flex items-center justify-center">
            <img className="lg:w-[400px] pb-6" src={featured} alt="" />
          </figure>
          <div className="flex flex-col">
            <p>March 20, 2023</p>
            <p>WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>

            <Link to={'/menu'}>
              <button className="btn btn-outline text-white border-0 border-b-4 border-b-black shadow-md w-2/4 md:w-1/4 text-sm hover:border-b-yellow-200">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
};

export default Featured;