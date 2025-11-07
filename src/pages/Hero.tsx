// import { Star } from "lucide-react";
import hero from "../assets/african-woman2-teaching-children-class.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="w-[92.5vw] h-calc(100vh-80px) px-6 pt-[20px] ml-[40px] xxs:w-[99%] xxs:ml-0 overflow-x-hidden">
      {/* <div className="container px-4 md:px-6 bg-blue-500"> */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4"  data-aos="fade-right"
          data-aos-duration="1500" data-aos-delay="200">
            <div className="space-y-2 text-focus-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-[20px]">
                <TypeAnimation
                sequence={[
                  'Connecting Exceptional Educators with Eager Learners',
                  1000,
                ]}
                wrapper="span"
                speed={30}
                style={{ display: 'inline-block' }}
                repeat={0} cursor={false}
              />
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
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none" data-aos="fade-left"
          data-aos-duration="1900" data-aos-delay="800">
            <img
              src={hero}
              alt="Classroom with teacher and students"
              // width={150}
              // height={20}
              className="w-[600px] h-[500px] rounded-xl object-cover shadow-xl" 
            />
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
