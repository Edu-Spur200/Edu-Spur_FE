"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import { TypeAnimation } from "react-type-animation";
import hero1 from "../assets/african-woman2-teaching-children-class.jpg";
import hero2 from "../assets/Training and Empowerment Program on Web Development_ This Program is Absolutely Free, Rush now and Register_.jpg";
import hero3 from "../assets/woman-teaching-kids-class.jpg";
import hero4 from "../assets/group-cheerful-friends-with-facemasks-taking-selfie-park.jpg";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  const slides = [
    {
      image: hero4,
      heading: "Empowering Teachers, Enriching Futures.",
      text: "At Edu-Spur, we go beyond placement — ensuring teachers earn fair pay, access home-lesson gigs, maintain balanced workloads, and gain tech training to stay ahead.",
      animation: "fade-right",
    },
    {
      image: hero1,
      heading: "Connecting Exceptional Educators with Eager Learners.",
      text: "Edu-Spur bridges educational gaps by providing qualified teachers for schools, parents, and students across regular subjects and tech courses.",
      animation: "fade-left",
    },
    {
      image: hero2,
      heading: "Innovating Education for Tomorrow’s Classrooms.",
      text: "We combine modern technology with traditional teaching methods to prepare learners and teachers for a fast-evolving world.",
      animation: "fade-up",
    },
    {
      image: hero3,
      heading: "Inspiring a New Generation of Learning.",
      text: "Through collaboration, innovation, and passion, we make education more impactful — for schools, teachers, and students alike.",
      animation: "fade-left",
    },
  ];

  return (
    <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-[#FAFAFA]">
      <Slider {...settings} className="h-full">
        {slides.map((slide, i) => (
          <div key={i} className="relative h-[calc(100vh-80px)] ">
            <img
              src={slide.image}
              alt={`Edu-Spur slide ${i + 1}`}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center px-6 md:px-16">
              <div
                className="max-w-3xl mx-auto text-white"
                data-aos={slide.animation}
                data-aos-duration="1500"
              >
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
