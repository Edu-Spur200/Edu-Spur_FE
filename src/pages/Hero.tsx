// import { Star } from "lucide-react";
import hero from "../assets/pexels.jpg";
export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-emerald-50 px-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Connecting Exceptional Educators with Eager Learners
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Edu-Spur bridges educational gaps by providing qualified
                teachers for schools, parents, and students across regular
                subjects and tech courses.
              </p>
            </div>
            {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-emerald-600 hover:bg-emerald-700">
                Find an Educator
              </button>
              <button className="h-10 px-4 py-2 text-sm font-medium border rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground">
                Become an Educator
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block rounded-full overflow-hidden border-2 border-background h-8 w-8"
                  >
                    <img
                      src={`/placeholder.svg?height=32&width=32&text=${i}`}
                      alt="User"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="text-muted-foreground">
                Trusted by 1000+ schools and families
              </div>
            </div> */}
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <img
              src={hero}
              alt="Classroom with teacher and students"
              width={550}
              height={550}
              className="w-full rounded-xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
