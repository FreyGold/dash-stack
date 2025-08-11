"use client";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Carousel } from "antd";
interface Slide {
  date: string;
  title: string;
  desc: string;
  btn: string;
}

const slides: Slide[] = [
  {
    date: "September 12-22",
    title: "Enjoy free home delivery in this summer",
    desc: "Designer Dresses - Pick from trendy Designer Dress.",
    btn: "Get Started",
  },
  {
    date: "October 1-10",
    title: "Autumn Sale - Up to 50% Off",
    desc: "Shop the latest styles with amazing discounts.",
    btn: "Shop Now",
  },
  {
    date: "November 5-15",
    title: "Black Friday Mega Sale",
    desc: "Don’t miss out on our biggest sale of the year.",
    btn: "Browse Deals",
  },
];
const FeaturedSlider = () => {
  return (
    <section className="bg-[url('/bgProducts.png')]  bg-repeat bg-cover rounded-2xl ">
      <Carousel>
        {slides.map((slide) => (
          <div key={slide.date} className="py-12.5 !flex items-center px-6 ">
            <button className="px-3  py-2.5 w-10 h-10 flex items-center  rounded-full bg-background-dark">
              <CaretLeftIcon size={12} />
            </button>
            <div className="content flex-1 px-16">
              <p className="text-text-light leading-7 font-semibold mb-2 ">
                {slide.date}
              </p>
              <p className="text-4xl text-text-light leading-12 font-bold w-full max-w-[400px] mb-2">
                {slide.title}
              </p>
              <p className=" text-text-light leading-7 font-semibold opacity-80 ">
                {slide.desc}
              </p>
              <button className="bg-[#FF8743] hover:bg-[#FF8743]/90 duration-300 cursor-pointer rounded-xl text-text-light mt-7.5 px-8 py-2">
                {slide.btn}{" "}
              </button>
            </div>
            <button className="px-3  py-2.5 w-10 h-10 flex items-center  rounded-full bg-background-dark">
              <CaretRightIcon size={12} />
            </button>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedSlider;
