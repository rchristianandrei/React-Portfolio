import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";
import { Toaster } from "@/components/ui/sonner";

export const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <Toaster />
    </>
  );
};
