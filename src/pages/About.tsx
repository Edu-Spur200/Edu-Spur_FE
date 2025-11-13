"use client";

import { Lightbulb, Users, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-neutral-50 text-neutral-900  px-6 md:px-12 mt-[20px] h-full"
    >
      <div
        className="max-w-4xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#133b55] mb-6">
          About Edu-Spur
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Edu-Spur is a teacher outsourcing and educational solutions company
          committed to connecting schools with competent educators and
          empowering teachers to grow professionally.
          <br />
          <br />
          Our mission is simple — to bridge the gap between quality education
          and accessibility by deploying well-trained, passionate teachers and
          introducing innovative tech-based learning programs across schools.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 text-left mt-10">
          {[
            {
              icon: <Users className="h-6 w-6 text-[#133b55]" />,
              title: "Teacher-Focused",
              desc: "We prioritize teachers’ growth, wellbeing, and fair compensation while ensuring excellence in every classroom.",
            },
            {
              icon: <Lightbulb className="h-6 w-6 text-[#133b55]" />,
              title: "Innovative Learning",
              desc: "We combine traditional teaching with modern technology to equip learners with relevant skills for the future.",
            },
            {
              icon: <Target className="h-6 w-6 text-[#133b55]" />,
              title: "Driven by Impact",
              desc: "Our programs are designed to improve school standards, inspire learners, and elevate the teaching profession.",
            },
            {
              icon: <Heart className="h-6 w-6 text-[#133b55]" />,
              title: "Community & Connection",
              desc: "We foster a supportive network between schools, teachers, and parents — building trust and lasting relationships.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center sm:items-start gap-3"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-lg text-[#133b55] text-center sm:text-left">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm text-center sm:text-left">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
