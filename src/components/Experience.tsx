import { Card, CardContent } from "@/components/ui/card";

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
      "Designed and implemented a dynamic content management capability that enables users and administrators to and manage their own web pages, significantly reducing development dependency and accelerating content deployment.",
      "Contribute to the design and development of the company website using ASP.NET for backend services, Angular for the front-end, and MS SQL Server for database management, delivering scalable and responsive solutions for core products and services.",
      "Manage deployment and hosting through IIS, ensuring reliability, security, and optimized performance across environments.",
    ],
    tech: ["Angular", "TypeScript", "Tailwind", "ASP.NET Core", "MsSQL"],
  },
  {
    role: "Software Engineer Intern",
    company: "Concentrix",
    dates: "Jan 2024 - Nov 2024",
    description: [
      "Designed, developed, and deployed multiple VB.NET desktop applications as part of a platform that empowered users to create their own tracker form applications—significantly reducing costs and accelerating development, testing, and deployment cycles.",
      "Tested modern web applications built on ASP.NET, Angular, and MySQL/MongoDB, leveraging Playwright to design and execute end-to-end automated test suites that validated functionality, performance, and integration across the stack.",
      "Participated in knowledge-sharing and experience-building activities with the supervisor at a local school, contributing to educational development and professional growth.",
    ],
    tech: ["Angular", "ASP.NET Core", "MySQL", "MongoDb", "VB.NET"],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full py-24 lg:h-screen lg:flex lg:items-center lg:justify-between"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="flex flex-col lg:flex-row overflow-hidden"
            >
              {/* Content */}
              <CardContent className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                    {exp.company} • {exp.dates}
                  </span>
                </div>

                <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
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
          ))}
        </div>
      </div>
    </section>
  );
};
