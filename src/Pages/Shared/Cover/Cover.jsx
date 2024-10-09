import { Parallax} from "react-parallax";

const Cover = ({ img,name,para}) => {
  return (
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
    <section
      style={{ backgroundImage: `url(${img})` }}
      className="max-w-7xl mx-auto min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed text-white w-full"
    >
      <div className="bg-slate-950 bg-opacity-50 w-3/4 h-[100px] lg:h-[300px] text-center flex items-center justify-center flex-col">
        <h2 className="lg:text-7xl text-2xl uppercase font-bold font-cinzel">
          {name}
        </h2>
        <p className="text-center pt-2  p-2 text-[10px] lg:text-[15px]">
          {para}
        </p>
      </div>
    </section>
    </Parallax>
  );
};

export default Cover;
