import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

type Experience = {
  role: string;
  company: string;
  dates: string;
  description: string[];
  tech?: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Developer 1",
    company: "SSCGI",
    dates: "Sept 2025 – Feb 2026",
    description: [
      "Designed and implemented a dynamic content management capability that enables users and administrators to manage their own web pages, significantly reducing development dependency and accelerating content deployment.",
      "Contributed to the design and development of the company website using ASP.NET for backend services, Angular for the front-end, and MS SQL Server for database management.",
      "Managed deployment and hosting through IIS, ensuring reliability, security, and optimized performance across environments.",
    ],
    tech: ["Angular", "TypeScript", "Tailwind", "ASP.NET Core", "MsSQL"],
  },
  {
    role: "Software Engineer Intern",
    company: "Concentrix",
    dates: "Jan 2024 - Nov 2024",
    description: [
      "Designed, developed, and deployed multiple VB.NET desktop applications as part of a platform that empowered users to create their own tracker form applications.",
      "Tested modern web applications built on ASP.NET, Angular, and MySQL/MongoDB using Playwright for automated end-to-end testing.",
      "Participated in knowledge-sharing activities at a local school, contributing to educational development and professional growth.",
    ],
    tech: ["Angular", "ASP.NET Core", "MySQL", "MongoDb", "VB.NET"],
  },
];

export const Experience = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="experience"
      className="w-full py-24 lg:h-screen lg:flex lg:items-center"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
        </div>

        {/* Carousel */}
        <div className="mt-16 relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {experiences.map((exp, index) => (
                <CarouselItem key={index} className="md:basis-1/1">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                          {exp.company} • {exp.dates}
                        </span>
                      </div>

                      <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2 flex-1">
                        {exp.description.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>

                      {exp.tech && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-md bg-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
          <div className="text-muted-foreground py-2 text-center text-sm">
            {current} of {count}
          </div>
        </div>
      </div>
    </section>
  );
};
