import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profilePic from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full py-24 sm:h-screen sm:flex sm:items-center sm:justify-between"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-40 sm:w-80 rounded-full bg-muted overflow-hidden border">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -z-10 inset-0 blur-3xl bg-primary/50 rounded-full" />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-4 text-sm font-medium text-primary">
              Software Engineer
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-primary">Andrei Reyes</span>
            </h1>

            <p className="mt-6 max-w-xl text-muted-foreground text-lg">
              I offer solid understanding of programming principles and passion
              for learning in professional setting. I bring foundational
              computer science concepts and hands-on experience. And I'm ready
              to use and develop coding and problem-solving skills.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm: justify-center items-center gap-4 lg:items-start">
              <Button size="lg" className="w-full sm:w-auto">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
