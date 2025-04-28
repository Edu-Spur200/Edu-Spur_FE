import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Edu-Spur helped our school fill critical teaching positions with exceptional educators who seamlessly integrated into our community.",
      author: "Principal Williams",
      organization: "Greenfield Academy",
      type: "School",
    },
    {
      quote:
        "Finding a qualified math tutor for my daughter was effortless with Edu-Spur. Her grades have improved significantly in just two months.",
      author: "Mrs. Thompson",
      organization: "Parent",
      type: "Parent",
    },
    {
      quote:
        "The coding bootcamp through Edu-Spur gave me practical skills that my regular curriculum didn't offer. I've already built my first app!",
      author: "Alex, 16",
      organization: "Student",
      type: "Student",
    },
    {
      quote:
        "As a rural school, we struggled to find specialized teachers. Edu-Spur connected us with excellent educators who provide both in-person and virtual instruction.",
      author: "Dr. Nguyen",
      organization: "Riverside High School",
      type: "School",
    },
    {
      quote:
        "My son's tutor understands his learning style and has made subjects he previously struggled with enjoyable and accessible.",
      author: "Mr. Garcia",
      organization: "Parent",
      type: "Parent",
    },
    {
      quote:
        "The professional development workshops for our teaching staff have revitalized our approach to education and brought new energy to our classrooms.",
      author: "Ms. Abimbola",
      organization: "Education Director",
      type: "School",
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Community Says
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from schools, parents, and students who have experienced the
              Edu-Spur difference.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-base text-muted-foreground">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-medium">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.organization}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
