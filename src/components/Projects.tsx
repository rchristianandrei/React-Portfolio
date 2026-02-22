import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { JSX } from "react";
import { ReactBadge } from "@/components/badges/React";
import { AngularBadge } from "@/components/badges/Angular";
import { AspNetCoreBadge } from "@/components/badges/AspNetCore";
import { MsSqlBadge } from "@/components/badges/MsSql";
import { VbNetBadge } from "@/components/badges/VbNet";
import { MySqlBadge } from "@/components/badges/MySql";
import { IisBadge } from "./badges/Iis";

type Project = {
  title: string;
  description: string;
  image?: string;
  tech: JSX.Element[];
  live?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Modern Portfolio",
    description:
      "A personal portfolio built with React, TypeScript, and shadcn/ui.",
    tech: [<ReactBadge key="React" />],
    live: "https://andreireyesportfolio.netlify.app/#",
    github: "https://github.com/rchristianandrei/React-Portfolio",
  },
  {
    title: "Company Website",
    description:
      "Content Management System Admin dashboard with charts, authentication, and responsive layout.",
    tech: [
      <AngularBadge key="Angular" />,
      <AspNetCoreBadge key="ASP.NET Core" />,
      <MsSqlBadge key="MsSQL" />,
      <IisBadge key="IIS" />,
    ],
    live: "https://sscgi.com",
  },
  {
    title: "Customizable Desktop Application Form",
    description:
      "Allows users to create and customize their own trackers according to their specific needs. This flexibility ensures that the software can adapt to various requirements and use cases.",
    tech: [<VbNetBadge key="VB.NET" />, <MySqlBadge key="MySQL" />],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-24 bg-muted/40 lg:h-screen lg:flex lg:items-center lg:justify-between"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col overflow-hidden transition hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="flex-1 p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">{project.tech}</div>
              </CardContent>

              {/* Buttons */}
              <CardFooter className="flex gap-3 p-6 pt-0">
                {project.live && (
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank">
                      Live
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}

                {project.github && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank">
                      Code
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
