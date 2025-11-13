"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {
  Award,
  BookOpen,
  CheckCircle,
  Code,
  GraduationCap,
  Users,
} from "lucide-react";

import pix from "../assets/It's Official! Virginia Becomes Fourth State To Ban Hair Discrimination.jpg";

export default function Benefits() {
  const benefits = [
    {
      icon: <Users className="h-10 w-10 text-[#133b55]" />,
      title: "Access to Quality Education",
      description:
        "We ensure all learners have access to exceptional educators regardless of location or resources.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[#133b55]" />,
      title: "Personalized Learning",
      description:
        "Our educators adapt to different learning styles and needs for optimal educational outcomes.",
    },
    {
      icon: <Code className="h-10 w-10 text-[#133b55]" />,
      title: "Future-Ready Skills",
      description:
        "We equip learners with the technical and soft skills needed for success in a rapidly changing world.",
    },
    {
      icon: <Award className="h-10 w-10 text-[#133b55]" />,
      title: "Professional Development",
      description:
        "We support continuous growth for educators through training and career advancement opportunities.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-[#133b55]" />,
      title: "Educational Excellence",
      description:
        "We maintain high standards through rigorous vetting and ongoing quality assurance.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#133b55]" />,
      title: "Community Impact",
      description:
        "We contribute to national growth by improving educational outcomes across communities.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1, // show only one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    centerMode: false, // remove partial slides
    adaptiveHeight: true,
  };

  return (
    <section
      id="benefits"
      className="w-full py-6 md:py-12 bg-gray-50 overflow-hidden px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center space-y-4 mb-12"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-[#092030]">
            Our Impact
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Bridging Educational Gaps
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Edu-Spur is committed to improving educational outcomes and fostering
            lifelong learning for national growth.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {benefits.map((item, i) => (
            <div key={i} className="pr-1 pl-3 w-full">
              <div
                className="flex flex-col items-center text-center rounded-lg border bg-card text-card-foreground shadow-sm p-4 w-full"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="p-2">{item.icon}</div>
                <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
                <p className="text-base text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Optional image */}
        <div className="mt-12 flex justify-center">
          <img src={pix} alt="Edu-Spur Impact" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}
