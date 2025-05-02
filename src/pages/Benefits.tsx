import {
  // ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  Code,
  GraduationCap,
  Users,
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Users className="h-10 w-10 text-emerald-600" />,
      title: "Access to Quality Education",
      description:
        "We ensure all learners have access to exceptional educators regardless of location or resources.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-emerald-600" />,
      title: "Personalized Learning",
      description:
        "Our educators adapt to different learning styles and needs for optimal educational outcomes.",
    },
    {
      icon: <Code className="h-10 w-10 text-emerald-600" />,
      title: "Future-Ready Skills",
      description:
        "We equip learners with the technical and soft skills needed for success in a rapidly changing world.",
    },
    {
      icon: <Award className="h-10 w-10 text-emerald-600" />,
      title: "Professional Development",
      description:
        "We support continuous growth for educators through training and career advancement opportunities.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-emerald-600" />,
      title: "Educational Excellence",
      description:
        "We maintain high standards through rigorous vetting and ongoing quality assurance.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-emerald-600" />,
      title: "Community Impact",
      description:
        "We contribute to national growth by improving educational outcomes across communities.",
    },
  ];

  return (
    <section
      id="benefits"
      className="w-full py-2 md:py-4 lg:py-12 bg-emerald-50 "
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center ml-[80px] xxs:ml-[5px]">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              Our Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Bridging Educational Gaps
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Edu-Spur is committed to improving educational outcomes and
              fostering lifelong learning for national growth.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-lg border bg-card text-card-foreground shadow-sm ml-[40px] xxs:ml-[7px] w-[320px] xxs:w-[280px]"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="p-2">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-base text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center">
          <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-emerald-600 hover:bg-emerald-700">
            Learn About Our Impact
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div> */}
      </div>
    </section>
  );
}
