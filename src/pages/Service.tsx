"use client"

import { useState } from "react"
import { ArrowRight, Award, BookOpen, CheckCircle, Code, Users } from "lucide-react"

export default function Services() {
  const [activeTab, setActiveTab] = useState("schools")

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 flex justify-center">
      <div className="container px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-4" data-aos="fade-down" data-aos-duration="1500">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-700">
              <Award className="h-4 w-4" />
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
              Comprehensive Educational Solutions
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 text-base md:text-lg">
              Edu-Spur offers a range of services to meet diverse educational needs, from regular subjects to
              specialized tech courses.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.5fr,1fr] lg:gap-12">
          <div className="w-full" data-aos="fade-right" data-aos-duration="1500">
            <div className="flex w-full border-b border-gray-200">
              <button
                onClick={() => setActiveTab("schools")}
                className={`flex-1 px-6 py-3 text-sm font-semibold text-center transition-colors ${activeTab === "schools"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                Schools
              </button>
              <button
                onClick={() => setActiveTab("parents")}
                className={`flex-1 px-6 py-3 text-sm font-semibold text-center transition-colors ${activeTab === "parents"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                Parents
              </button>
              <button
                onClick={() => setActiveTab("students")}
                className={`flex-1 px-6 py-3 text-sm font-semibold text-center transition-colors ${activeTab === "students"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                Students
              </button>
            </div>

            {activeTab === "schools" && (
              <div className="space-y-6 pt-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <Users className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Teacher Outsourcing</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Fill teaching vacancies quickly with qualified educators who match your school's culture and
                      requirements.
                    </p>
                  </div>

                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <BookOpen className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Curriculum Support</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Get specialized educators to enhance your existing curriculum or develop new educational programs.
                    </p>
                  </div>

                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <Code className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Tech Education</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Introduce cutting-edge technology courses with expert instructors in programming and digital
                      skills.
                    </p>
                  </div>

                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <Award className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Professional Development</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Upskill your existing teaching staff with specialized training and workshops from industry
                      experts.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "parents" && (
              <div className="space-y-6 pt-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <Users className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Private Tutoring</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Connect with qualified tutors for personalized one-on-one learning experiences tailored to your
                      child's needs.
                    </p>
                  </div>

                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <BookOpen className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Homeschooling Support</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Get expert guidance and teaching support for your homeschooling curriculum and educational goals.
                    </p>
                  </div>

                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <Code className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Tech Skills Development</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Help your child develop future-ready skills with specialized tech education from industry
                      professionals.
                    </p>
                  </div>

                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <Award className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Enrichment Programs</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Enhance your child's education with specialized enrichment programs in arts, sciences, and more.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md">
                    Parent Solutions
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === "students" && (
              <div className="space-y-6 pt-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <Users className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Academic Support</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Get help with challenging subjects and exam preparation from experienced educators.
                    </p>
                  </div>

                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <BookOpen className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Career Guidance</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Receive mentorship and guidance from professionals in your field of interest to plan your
                      educational path.
                    </p>
                  </div>

                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <Code className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Coding & Tech Bootcamps</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Learn in-demand tech skills through intensive bootcamps led by industry professionals.
                    </p>
                  </div>

                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="rounded-lg bg-red-100 p-2">
                        <Award className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Skill Development</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Develop practical skills that complement your academic education and prepare you for future
                      success.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6" data-aos="fade-left" data-aos-duration="1500">
            <h3 className="text-2xl font-bold text-gray-900">Why Choose Edu-Spur?</h3>
            <ul className="space-y-4">
              {[
                "Vetted, qualified educators with proven track records",
                "Flexible scheduling to meet your specific needs",
                "Specialized expertise in both traditional and tech subjects",
                "Personalized matching based on teaching style and requirements",
                "Continuous support and quality assurance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}