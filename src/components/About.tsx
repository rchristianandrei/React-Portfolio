import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "React", class: "bg-blue-300 text-blue-900" },
  { name: "Angular", class: "bg-red-300 text-red-900" },
  { name: "ASP.NET Core", class: "bg-purple-300 text-purple-900" },
  { name: "MySQL", class: "bg-orange-300 text-orange-900" },
  { name: "MsSQL", class: "bg-cyan-300 text-cyan-900" },
  { name: "MongoDb", class: "bg-green-300 text-green-900" },
];

export const About = () => {
  return (
    <section
      id="about"
      className="w-full py-24 bg-muted/40 lg:h-screen lg:flex lg:items-center lg:justify-between"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
          {/* Left - Bio */}
          <div>
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I specialize in creating full stack applications. I enjoy
              transforming ideas into scalable and elegant digital experiences.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              My focus is on writing clean, maintainable code while ensuring
              excellent user experience and accessibility.
            </p>
          </div>

          {/* Right - Skills */}
          <div>
            <h3 className="text-2xl font-semibold">Skills & Technologies</h3>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <Card key={skill.name} className={`text-center ${skill.class}`}>
                  <CardContent className="p-4 text-sm font-medium">
                    {skill.name}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
