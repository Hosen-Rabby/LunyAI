import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '5px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div className="w-full">
      <div className="my-4">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="" key={d.index}>
              <div className="flex items-center mb-2">
                <div className="w-[34px] h-[34px] text-center bg-[#F4EBFF] flex items-center justify-center rounded-full">
                  <p className="text-[12px]">{d.name}</p>
                </div>
                <p className="font-semibold ml-1 text-[12px]">{d.title}</p>
              </div>
              <div className="slide_img w-[286px] h-[182px]">
                <img src={d.image} alt="Image" className="w-full h-full" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: "KD",
    title: "Pop-up project management",
    image: "https://stupendous-banoffee-e26fea.netlify.app/Image%201%20(4).svg",
  },
  {
    name: "YG",
    title: "Pop-up project management",
    image: "https://stupendous-banoffee-e26fea.netlify.app/Image%202%20(1).svg",
  },
  {
    name: "OD",
    title: "Pop-up project management",
    image: "https://stupendous-banoffee-e26fea.netlify.app/Image%203.svg",
  },
  {
    name: "FO",
    title: "Pop-up project management",
    image: "https://stupendous-banoffee-e26fea.netlify.app/Image%204.svg",
  },
];
