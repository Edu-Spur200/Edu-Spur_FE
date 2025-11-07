"use client";

import pix from "../assets/Hands of client and banker shaking hands on conference table after business stock photo.jpg"

import { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  Code,
  Users,
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("schools");

  return (
    <section
      id="services"
      className="w-[98%] md:pt-14 lg:pt-32 xxs:mt-[50px] xxs:w-[95%] overflow-x-hidden xxs:ml-0 xs:ml-[5px] x:ml-[10px] flex justify-center"
    >
      <div className="container px-2 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div
            className="space-y-2 ml-[90px] xxs:ml-[10px]"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-[20px] text-[#092030]">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Comprehensive Educational Solutions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Edu-Spur offers a range of services to meet diverse educational
              needs, from regular subjects to specialized tech courses.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 pl-[50px] xxs:pl-[10px] xxs:w-[100%]">
          <div
            className="w-[600px] xxs:w-[100%]"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="flex w-full border-b">
              {["teachers", "schools", "parents"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-2 text-sm font-medium text-center ${activeTab === tab
                    ? "border-b-2 border-[#133b55] text-[#133b55]"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            {/* Teachers Tab */}
            {activeTab === "teachers" && (
              <div className="space-y-4 pt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      icon: <Award className="h-8 w-8 text-[#133b55]" />,
                      title: "Professional Growth",
                      desc:
                        "Access exclusive training, mentorship, and certifications that help you advance your teaching career.",
                    },
                    {
                      icon: <Users className="h-8 w-8 text-[#133b55]" />,
                      title: "Teaching Opportunities",
                      desc:
                        "Get matched with schools close to your residence to ensure comfort, reduced stress, and work-life balance.",
                    },
                    {
                      icon: <BookOpen className="h-8 w-8 text-[#133b55]" />,
                      title: "Continuous Learning & Tech Training",
                      desc:
                        "Benefit from regular workshops and tech-focused training that enhance your teaching effectiveness and digital literacy.",
                    },
                    {
                      icon: <CheckCircle className="h-8 w-8 text-[#133b55]" />,
                      title: "Compensation & Rewards",
                      desc:
                        "Enjoy fair pay structures, additional compensations for exceptional performance, and home lesson gigs to boost your income.",
                    },
                    {
                      icon: <Users className="h-8 w-8 text-[#133b55]" />,
                      title: "Work Environment & Community",
                      desc:
                        "Thrive in a conducive work environment with reasonable workloads and a strong sense of belonging within the Edu-Spur community.",
                    },
                  ].map((service, i) => (
                    <div
                      key={i}
                      className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    >
                      <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                          {service.icon}
                          {service.title}
                        </h3>
                      </div>
                      <div className="p-6 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Schools Tab */}
            {activeTab === "schools" && (
              <div className="space-y-4 pt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      icon: <Users className="h-5 w-5 text-[#133b55]" />,
                      title: "Teacher Outsourcing",
                      desc: "Fill teaching vacancies quickly with qualified educators who match your school's culture and requirements.",
                    },
                    {
                      icon: <BookOpen className="h-5 w-5 text-[#133b55]" />,
                      title: "Curriculum Support",
                      desc: "Get specialized educators to enhance your existing curriculum or develop new educational programs.",
                    },
                    {
                      icon: <Code className="h-5 w-5 text-[#133b55]" />,
                      title: "Tech Education",
                      desc: "Introduce cutting-edge technology courses with expert instructors in programming and digital skills.",
                    },
                    {
                      icon: <Award className="h-5 w-5 text-[#133b55]" />,
                      title: "Professional Development",
                      desc: "Upskill your existing teaching staff with specialized training and workshops from industry experts.",
                    },
                  ].map((service, i) => (
                    <div
                      key={i}
                      className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    >
                      <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                          {service.icon}
                          {service.title}
                        </h3>
                      </div>
                      <div className="p-6 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Parents Tab */}
            {activeTab === "parents" && (
              <div className="space-y-4 pt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      icon: <Users className="h-5 w-5 text-[#133b55]" />,
                      title: "Private Tutoring",
                      desc: "Connect with qualified tutors for personalized one-on-one learning experiences tailored to your child's needs.",
                    },
                    {
                      icon: <BookOpen className="h-5 w-5 text-[#133b55]" />,
                      title: "Homeschooling Support",
                      desc: "Get expert guidance and teaching support for your homeschooling curriculum and educational goals.",
                    },
                    {
                      icon: <Code className="h-5 w-5 text-[#133b55]" />,
                      title: "Tech Skills Development",
                      desc: "Help your child develop future-ready skills with specialized tech education from industry professionals.",
                    },
                    {
                      icon: <Award className="h-5 w-5 text-[#133b55]" />,
                      title: "Enrichment Programs",
                      desc: "Enhance your child's education with specialized enrichment programs in arts, sciences, and more.",
                    },
                  ].map((service, i) => (
                    <div
                      key={i}
                      className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    >
                      <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                          {service.icon}
                          {service.title}
                        </h3>
                      </div>
                      <div className="p-6 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}


          </div>

          {/* Why Choose Edu-Spur */}
          <div
            className="space-y-4 ml-[160px] xxs:ml-[0px]"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h3 className="text-2xl font-bold">Why Choose Edu-Spur?</h3>
            <ul className="grid gap-3">
              {[
                "Proximity to the homes of the teachers",
                "Compensations for hard work",
                "Conducive work environment",
                "A sense of community between us and the teachers",
                "Home lesson gigs to augment pay at school",
                "Reasonable workloads",
                "Tech trainings",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#133b55]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={pix} alt="" />
        </div>
      </div>
    </section>
  );
}
