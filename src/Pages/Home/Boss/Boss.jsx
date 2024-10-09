import img from "../../../assets/home/chef-service.jpg";

const Boss = () => {
  return (
    <div
      className="mt-16 mb-12 bg-cover bg-center flex justify-center items-center lg:h-96  relative p-6 font-cinzel bg-fixed"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-white text-black text-center  rounded-lg shadow-lg w-3/4  lg:w-2/4 p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel uppercase pb-4">
          Fairy Boss
        </h2>
        <p className="text-[10px] lg:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          rerum nemo minus vitae ipsa eligendi accusamus quibusdam veniam
          aspernatur. Expedita aspernatur eos iure, quaerat, ad labore cum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, veritatis!
        </p>
      </div>
    </div>
  );
};

export default Boss;
