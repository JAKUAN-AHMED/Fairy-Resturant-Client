import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import chef from "../../../assets/home/slide2.jpg";
const images = [chef, chef, chef];
const Recomendation = () => {
  return (
    <section className="max-w-7xl mx-auto  mt-12 mb-12">
      <SectionTitle subheading="Should Try" heading="chef recommends" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-4 mt-16">
        {images.map((img, idx) => (
          <div
            key={idx}
            className=" card font-cinzel w-90 md:w-80  bg-yellow-100 text-black border rounded-xl shadow-xl text-center items-center "
          >
            <figure className="sm:mr-4 lg:w-[400px] h-[200px] mt-4 ">
              <img
                src={img}
                alt="item"
                className="border-2 border-blue-800 rounded-full shadow-lg"
              />
            </figure>

            <div className="card-body justify-center items-center">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <button className="uppercase btn btn-outline border-b-4 w-2/4 border-b-blue-500 text-[10px]  text-black hover:border-yellow-400">
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recomendation;
