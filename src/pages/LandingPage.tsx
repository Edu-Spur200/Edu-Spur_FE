import Benefits from "./Benefits";
import CallToAction from "./CallToAction";
// import Educators from "./Educators";
import Hero from "./Hero";
import Services from "./Service";
// import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <div className="">
      <Hero />
      <Services />
      <Benefits />
      {/* <Educators /> */}
      {/* <Testimonials /> */}
      <CallToAction />
    </div>
  );
};

export default LandingPage;
