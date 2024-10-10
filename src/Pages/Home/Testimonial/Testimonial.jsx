import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";
const Testimonial = () => {
    const [review,setReview]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    const nextSlide=()=>{
        setCurrentSlide((prev)=>prev===review.length-1?0:prev+1);
    }
    const prevSlide=()=>{
        setCurrentSlide((next)=>next=== 0?review.length-1 : next-1);
    }
    useEffect(()=>{
        axios.get("http://localhost:5000/reviews")
        .then(res=>setReview(res.data))
    },[])
    // console.log("reviews",review);
    return (
      <div className="overflow-hidden">
        <SectionTitle
          heading="testimonials"
          subheading="What Our Clients Say"
        />
        <div>
          <div className="flex justify-between items-center">
            <button onClick={prevSlide} className="text-4xl text-blue-600">
              <IoIosArrowBack></IoIosArrowBack>
            </button>
            <div className="text-center flex flex-col space-y-4 items-center">
              <Rating
                style={{ maxWidth: 100, textAlign: "center" }}
                value={review[currentSlide]?.rating}
                readOnly
              />
                <p className="text-4xl"><FaQuoteLeft></FaQuoteLeft></p>
              <p className="text-center lg:w-[300px]">
                {review[currentSlide]?.details}
              </p>
              <h2 className="text-center text-2xl font-medium text-blue-600">
                {review[currentSlide]?.name}
              </h2>
            </div>
            <button onClick={nextSlide} className="text-4xl text-blue-600">
              <IoIosArrowForward></IoIosArrowForward>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Testimonial;