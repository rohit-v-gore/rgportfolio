import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Career = () => {
  const experiences = [
    {
      title: "Forward Deployed Software Engineer ",
      company: "Textron Systems",
      period: "January 2024 - Present",
      description: "Building software deployed on autonomous vessels for the US Navy that speiclaize in enemy mine countermeasures. I spend half of my time onsite at one of two surface warfare centers at Panama City Beach, FL or San Diego, CA",
    },
    {
      title: "Co-Founder/CEO",
      company: "CarnotX",
      period: "August 2025 - Present",
      description: "My good friend Patrick and I are building a software product that optimizes data center cooling. With the data center count set to double in 5 years and the energy use as a result set to triple in the next 10, we believe it is a critical problem to solve. There is much more information avilable about this at carnotx.com.",
    },
    {
      title: "Associate",
      company: "Bruin Entrepreneurs",
      period: "2021 - 2024",
      description: "During my studies at UCLA, I spent a great deal of time meeting UCLA alumni founders and building products with fellow students. It was a great experience and one of the main drivers of me getting into software and entrepreneursip.",
    },
    {
      title: "Software Engineering Intern",
      company: "Textron Systems",
      period: "June 2023 - September 2023",
      description: "Textron builds this huge hovercraft called the SSC and I worked on the software governing the power distribution to the onboard appliances from its generators. This was a fun internship because it was in New Orleans, a fun city I had never been to.",
    },
    {
      title: "Software Engineering Intern",
      company: "Textron Aviation",
      period: "June 2022 - September 2022",
      description: "Textron acquired Cessna a long time ago and its private jet product line has gotten way bigger over the years. I got to work on the avionics software for the Cessna Citation Longitude which is their most expensive and luxurious private jet but boy is it pretty.",
    },
    {
      title: "Research Associate",
      company: "UCLA Department of Electrical & Computer Engineering",
      period: "June 2021 - September 2021",
      description: "As a freshman looking to get into any engineering project I ended up at the lab of Dr. Rajit Gadh and Dr. Peter Chu who were conducting research on how to charge electric trucks. Electric trucks have these massive battery capacities but nobody is gonna sit there and wait for a truck to charge to full. The point of the research project was to see if a 1MW charger was possbile to build so we messed with materials and broke and burned alot of stuff. Seems like they are doing well now.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground">CAREER</h1>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group border-border bg-card p-6 transition-all hover:border-primary hover:shadow-tactical"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="mt-1 text-primary">{exp.company}</p>
                  <p className="mt-4 text-muted-foreground">{exp.description}</p>
                </div>
                <span className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Career;
