"use client";

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
    <section id="services" className="w-[98%] md:pt-14 lg:pt-32 xxs:mt-[50px]  xxs:w-[95%] overflow-x-hidden xxs:ml-0 xs:ml-[5px] x:ml-[10px]  flex justify-center ">
      <div className="container px-2 md:px-6 ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 ml-[90px] xxs:ml-[10px]"  data-aos="fade-down"
          data-aos-duration="1500">
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
          <div className="w-[600px] xxs:w-[100%]"  data-aos="fade-right" data-aos-duration="1500">
            <div className="flex w-full border-b">
              <button
                onClick={() => setActiveTab("schools")}
                className={`flex-1 px-4 py-2 text-sm font-medium text-center ${
                  activeTab === "schools"
                    ? "border-b-2 border-[#133b55] text-[#133b55]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Schools
              </button>
              <button
                onClick={() => setActiveTab("parents")}
                className={`flex-1 px-4 py-2 text-sm font-medium text-center ${
                  activeTab === "parents"
                    ? "border-b-2 border-[#133b55] text-[#133b55]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Parents
              </button>
              <button
                onClick={() => setActiveTab("students")}
                className={`flex-1 px-4 py-2 text-sm font-medium text-center ${
                  activeTab === "students"
                    ? "border-b-2 border-[#133b55] text-[#133b55]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Students
              </button>
            </div>

            {activeTab === "schools" && (
              <div className="space-y-4 pt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <Users className="h-5 w-5 text-[#133b55]" />
                        Teacher Outsourcing
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Fill teaching vacancies quickly with qualified educators
                        who match your school's culture and requirements.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <BookOpen className="h-5 w-5 text-[#133b55]" />
                        Curriculum Support
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Get specialized educators to enhance your existing
                        curriculum or develop new educational programs.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <Code className="h-5 w-5 text-[#133b55]" />
                        Tech Education
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Introduce cutting-edge technology courses with expert
                        instructors in programming and digital skills.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <Award className="h-5 w-5 text-[#133b55]" />
                        Professional Development
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Upskill your existing teaching staff with specialized
                        training and workshops from industry experts.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center">
                  <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-[#133b55] hover:bg-emerald-700">
                    School Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div> */}
              </div>
            )}

            {activeTab === "parents" && (
              <div className="space-y-4 pt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <Users className="h-5 w-5 text-[#133b55]" />
                        Private Tutoring
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Connect with qualified tutors for personalized
                        one-on-one learning experiences tailored to your child's
                        needs.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <BookOpen className="h-5 w-5 text-[#133b55]" />
                        Homeschooling Support
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Get expert guidance and teaching support for your
                        homeschooling curriculum and educational goals.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <Code className="h-5 w-5 text-[#133b55]" />
                        Tech Skills Development
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Help your child develop future-ready skills with
                        specialized tech education from industry professionals.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <Award className="h-5 w-5 text-[#133b55]" />
                        Enrichment Programs
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Enhance your child's education with specialized
                        enrichment programs in arts, sciences, and more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-[#133b55] hover:bg-[#133b55]">
                    Parent Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === "students" && (
              <div className="space-y-4 pt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <Users className="h-5 w-5 text-[#133b55]" />
                        Academic Support
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Get help with challenging subjects and exam preparation
                        from experienced educators.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <BookOpen className="h-5 w-5 text-[#133b55]" />
                        Career Guidance
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Receive mentorship and guidance from professionals in
                        your field of interest to plan your educational path.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <Code className="h-5 w-5 text-[#133b55]" />
                        Coding & Tech Bootcamps
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Learn in-demand tech skills through intensive bootcamps
                        led by industry professionals.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        <Award className="h-5 w-5 text-[#133b55]" />
                        Skill Development
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">
                        Develop practical skills that complement your academic
                        education and prepare you for future success.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-center">
                  <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-[#133b55] hover:bg-emerald-700">
                    Student Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div> */}
              </div>
            )}
          </div>
          <div className="space-y-4 ml-[160px] xxs:ml-[0px]"  data-aos="fade-left" data-aos-duration="1500">
            <h3 className="text-2xl font-bold ">Why Choose Edu-Spur?</h3>
            <ul className="grid gap-3">
              {[
                "Vetted, qualified educators with proven track records",
                "Flexible scheduling to meet your specific needs",
                "Specialized expertise in both traditional and tech subjects",
                "Personalized matching based on teaching style and requirements",
                "Continuous support and quality assurance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#133b55]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
              {/* <div className="rounded-lg bg-muted p-4">
                <blockquote className="italic text-muted-foreground">
                  "Edu-Spur has transformed how we approach education, making
                  quality teaching accessible to all."
                </blockquote>
                <div className="mt-2 font-medium">
                  — Education Ministry Official
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
