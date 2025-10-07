// import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "../assets/Flat illustration of a teacher in a class _ Premium AI-generated vector.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-red-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center min-h-[calc(100vh-160px)]">

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-8">

            {/* Badge */}
            <div className="space-y-4" data-aos="fade-down" data-aos-duration="1500">
              <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-red-100 border border-red-200">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-900">Trusted by 1000+ schools & families</span>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4" data-aos="zoom-in" data-aos-duration="1500">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-normal leading-normal text-slate-800">
                  Connecting Exceptional Educators with Eager Learners
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Edu-Spur bridges educational gaps by providing qualified
                  teachers for schools, parents, and students across regular
                  subjects and tech courses.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4" data-aos="fade-right" data-aos-duration="1500">
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-red-500 hover:bg-red-600 text-white px-6 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex items-center justify-between">
                  Find an Educator
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="border-2 border-gray-300 hover:border-red-400 hover:bg-red-50 px-6 py-6 text-base rounded-lg transition-all bg-transparent">
                  Become an Educator
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4" data-aos="fade-up" data-aos-duration="1500">
              <div className="flex flex-wrap gap-8 pt-5">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-red-600">500+</div>
                  <div className="text-sm text-gray-600">Qualified Educators</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-red-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center justify-center lg:justify-end mb-4 lg:mb-32">
            <div className="relative group">
              <div className="space-y-4" data-aos="fade-left" data-aos-duration="1500">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src={heroImage || "/placeholder.svg"}
                    alt="Professional educator teaching in a modern classroom"
                    className="w-full h-full object-cover max-w-[600px] aspect-[4/3] transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="space-y-4" data-aos="fade-up" data-aos-duration="1500">
                <div className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl bg-white shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        4.9/5 Rating
                      </div>
                      <div className="text-xs text-gray-600">
                        From our students
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
