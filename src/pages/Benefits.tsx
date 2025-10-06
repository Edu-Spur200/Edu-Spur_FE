import { Award, BookOpen, CheckCircle, Code, GraduationCap, Users } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: <Users className="h-10 w-10 text-red-500" />,
      title: "Access to Quality Education",
      description: "We ensure all learners have access to exceptional educators regardless of location or resources.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-red-500" />,
      title: "Personalized Learning",
      description: "Our educators adapt to different learning styles and needs for optimal educational outcomes.",
    },
    {
      icon: <Code className="h-10 w-10 text-red-500" />,
      title: "Future-Ready Skills",
      description:
        "We equip learners with the technical and soft skills needed for success in a rapidly changing world.",
    },
    {
      icon: <Award className="h-10 w-10 text-red-500" />,
      title: "Professional Development",
      description: "We support continuous growth for educators through training and career advancement opportunities.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-red-500" />,
      title: "Educational Excellence",
      description: "We maintain high standards through rigorous vetting and ongoing quality assurance.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-red-500" />,
      title: "Community Impact",
      description: "We contribute to national growth by improving educational outcomes across communities.",
    },
  ]

  return (
    <section
      id="benefits"
      className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-red-50"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-4" data-aos="fade-down" data-aos-duration="1000">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-700 border border-red-200">
              <Award className="h-4 w-4" />
              Our Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
              Bridging Educational Gaps
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-lg lg:text-xl mx-auto">
              Edu-Spur is committed to improving educational outcomes and fostering lifelong learning for national
              growth.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center rounded-xl border border-red-100 bg-white p-8 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={i * 100}
            >
              <div className="mb-4 p-3 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
