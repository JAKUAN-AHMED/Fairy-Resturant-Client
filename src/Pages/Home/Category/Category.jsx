import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import s1 from "../../../assets/home/slide1.jpg";
import s2 from "../../../assets/home/slide2.jpg";
import s3 from "../../../assets/home/slide3.jpg";
import s4 from "../../../assets/home/slide4.jpg";
import s5 from "../../../assets/home/slide5.jpg";
import s6 from "../../../assets/home/slide2.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const slides = [s1, s2, s3, s4, s5, s6];
const text = ["salads", "pizza", "soups", "cake", "vegetables", "pizza"];
const Category = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <section className="mt-12 mb-12">
      <SectionTitle
        subheading="From 11:00am to 10:00pm"
        heading="Order Online"
      />
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, idx) => (
          <div key={idx} className="keen-slider__slide number-slide">
            <img className="object-cover w-full h-[300px]" src={slide} alt="" />
            <h2 className="text-4xl text-center uppercase text-[#FFF] font-cinzel -mt-16 font-normal">
              {text[idx]}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
