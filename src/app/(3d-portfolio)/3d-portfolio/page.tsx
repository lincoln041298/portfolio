import Contact from "@/components/3dportfolio/Contact";
import Hero from "@/components/3dportfolio/Hero";
import Who from "@/components/3dportfolio/Who";
import Work from "@/components/3dportfolio/Work";
import "./page.css";

const page = () => {
  return (
    <section className="h-screen bg-white section">
      <Hero />
      <Who />
      <Work />
      <Contact />
    </section>
  );
};

export default page;
