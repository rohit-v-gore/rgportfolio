import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

type EducationEntry = {
  level: string;
  school: string;
  degree?: string;
  period: string;
  description: string;
  website?: string;
  previewImage?: string;
};

const Education = () => {
  const education: EducationEntry[] = [
    {
      level: "Graduate",
      school: "Georgia Institute of Technology",
      degree: "MS in Computer Science",
      period: "1/2 done, on leave for CarnotX",
      description: "While I was working on autonomous surface vessels at Textron Systems, the company financed my Master’s degree in Computer Science. I loved being able to immediately apply high-level concepts like AI for robotics and machine learning to the real-world problems I was solving at work. I also explored building full-stack apps and even ML in high-frequency trading. I completed half of the degree and truly enjoyed the academic challenge, but I eventually decided to step away to focus entirely on starting CarnotX. Graduate education is something my community deeply values, so I may return to finish it one day—but for now, my heart is in building a successful hardtech company.",
      website: "",
      previewImage: "",
    },{
      level: "Undergraduate",
      school: "UCLA",
      degree: "BS in Mechanical Engineering",
      period: "Graduated December 2023",
      description: "UCLA was easily the best four years of my life. Between the beautiful weather and the rigorous academics, I appreciated every minute on campus. It was the ultimate launchpad for me—it’s where I explored software for the first time and decided to build a career in it. But it was about so much more than just the classroom; I loved being in my fraternity, playing intramural sports, and working in the research lab. From the long nights of studying to the bars and parties with friends, it was an incredible balance. I still look back at pictures from those years all the time; they shaped everything.",
      website: "",
      previewImage: "",
    },
    {
      level: "High School",
      school: "Northwest High School",
      degree: "Diploma",
      period: "Graduated June 2020",
      description: "High school was a truly amazing four years for me. I spent that time exploring everything I could, especially in math and the sciences, which really sparked my interest in engineering. More importantly, I met some of my best friends who, even today, push me to be a better person and professional. Those years were the foundation for everything that came after, and I’ll always look back on those good times fondly. I ended up graduating in the top 25 of my class, which was the perfect jumping-off point for my journey to UCLA.",
      website: "",
      previewImage: "",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground">EDUCATION</h1>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="group border-border bg-card transition-all hover:border-primary hover:shadow-tactical"
            >
              <div className="flex flex-col md:flex-row">
                {edu.previewImage && edu.previewImage.trim() !== "" && (
                  <div className="relative h-48 w-full overflow-hidden md:h-auto md:w-64 md:flex-shrink-0">
                    <img
                      src={edu.previewImage}
                      alt={`${edu.school} preview`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">{edu.level}</h3>
                      <p className="mt-1 text-primary">{edu.school}</p>
                      {edu.degree && (
                        <p className="mt-1 text-sm text-muted-foreground">{edu.degree}</p>
                      )}
                      <p className="mt-4 text-muted-foreground">{edu.description}</p>
                      {edu.website && edu.website.trim() !== "" && (
                        <a
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          Visit Website
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                    <span className="font-mono text-sm text-muted-foreground whitespace-nowrap ml-4">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Education;

