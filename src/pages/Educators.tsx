import { ArrowRight } from "lucide-react";

export default function Educators() {
  const educators = [
    {
      name: "Dr. Sarah Johnson",
      role: "Science Specialist",
      bio: "Ph.D. in Physics with 15 years of teaching experience at all educational levels.",
      subjects: ["Physics", "Chemistry", "STEM"],
    },
    {
      name: "Michael Chen",
      role: "Technology Instructor",
      bio: "Former software engineer with a passion for teaching coding and digital skills to young learners.",
      subjects: ["Programming", "Web Development", "AI Basics"],
    },
    {
      name: "Priya Patel",
      role: "Mathematics Expert",
      bio: "Mathematics educator specializing in making complex concepts accessible to students of all abilities.",
      subjects: ["Algebra", "Calculus", "Statistics"],
    },
    {
      name: "James Wilson",
      role: "Language Arts Teacher",
      bio: "Published author with a background in education and a talent for inspiring young writers.",
      subjects: ["English Literature", "Creative Writing", "Grammar"],
    },
    {
      name: "Dr. Olivia Martinez",
      role: "Social Sciences Educator",
      bio: "Historian and anthropologist bringing global perspectives to social studies education.",
      subjects: ["History", "Geography", "Sociology"],
    },
    {
      name: "David Okafor",
      role: "STEM Coordinator",
      bio: "Engineering professional turned educator with a focus on practical applications of STEM concepts.",
      subjects: ["Robotics", "Engineering", "Design Thinking"],
    },
  ];

  return (
    <section id="educators" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg [#133b55] px-3 py-1 text-sm text-[#092030]">
              Our Educators
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Meet Our Exceptional Teachers
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Edu-Spur connects you with highly qualified educators who are
              passionate about teaching and student success.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {educators.map((educator, i) => (
            <div
              key={i}
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <img
                    src={`/placeholder.svg?height=96&width=96&text=${educator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}`}
                    alt={educator.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{educator.name}</h3>
                <p className="text-[#133b55] font-medium">{educator.role}</p>
              </div>
              <div className="p-6 pt-0 text-center">
                <p className="mb-4 text-sm text-muted-foreground">
                  {educator.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {educator.subjects.map((subject, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0 flex justify-center">
                <button className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-[#133b55] hover:bg-emerald-700">
            Browse All Educators
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
