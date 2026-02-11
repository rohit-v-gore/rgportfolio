import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  website?: string;
  previewImage?: string;
};

const Career = () => {
  const experiences: Experience[] = [
    {
      title: "Co-Founder/CEO",
      company: "CarnotX",
      period: "January 2026 - Present",
      description: "After three years engineering mission-critical systems in aerospace and defense, I co-founded CarnotX to bridge the 8-minute gap in emergency response. Alongside my co-founder, Patrick, we are building fully autonomous sUAS designed for the high-pressure environments of national security and first response—a market on pace to double every five years. We are moving from 'human-in-the-loop' to true aerial intelligence. Information about the company is available at our website.",
      website: "https://carnotx.com",
      previewImage: "",
    },
    {
      title: "Forward Deployed Software Engineer ",
      company: "Textron Systems",
      period: "January 2024 - January 2026",
      description: "For two years at Textron Systems, I engineered the autonomy and software architecture for Uncrewed Surface Vessels (USVs) deployed by the US Navy. Working at the intersection of mechanical, electrical, and software engineering, I specialized in the end-to-end integration of mine countermeasure systems. My role took me from deep-track code development to field-testing at the Naval Surface Warfare Centers in Panama City and San Diego. By collaborating directly with agency heads and frontline stakeholders, I gained a rigorous understanding of what it takes to build 'mission-critical' robotics that survive in contested environments. This experience solidified my commitment to embedded systems and is the foundation upon which I am building the security-standards for CarnotX. Information about the MMUSV is available at the Textron Systems website.",
      website: "https://investor.textron.com/news-releases/news-details/2026/Textron-Systems-Introduces-Multi-Mission-Uncrewed-Surface-Vessel-MMUSV-2026-AWg1cgKU8v/default.aspx",
      previewImage: "",
    },
    {
      title: "Associate",
      company: "Bruin Entrepreneurs",
      period: "2021 - 2024",
      description: "While studying mechanical engineering at UCLA, I became obsessed with the intersection of hardware and venture. As a member of Bruin Entrepreneurs, I spent my time embedded in the startup ecosystem, learning from founders in the SaaS and robotics sectors. This environment solidified my 'hardtech-first' philosophy: building physical products that solve deep-seated customer needs. To bridge the gap between theory and the market, I joined a gesture-control wearable startup as an intern, where I got my first taste of rapid hardware prototyping and the unique challenges of building consumer electronics.",
      website: "https://bruinentrepreneurs.org/",
      previewImage: "",
    },
    {
      title: "Software Engineering Intern",
      company: "Textron Systems",
      period: "June 2023 - September 2023",
      description: "At Textron Systems, I engineered the power distribution software for the Ship-to-Shore Connector (SSC), a next-generation US Navy hovercraft. Working directly on the production floor in New Orleans, I developed logic to manage load distribution from onboard generators to critical mission appliances. This role required a deep understanding of the 'hardware-software bridge,' ensuring that complex electrical systems remained stable under the extreme physical stresses of a 50-knot amphibious vehicle. Seeing my code govern a multi-ton craft during high-speed sea trials solidified my focus on building high-performance, reliable uncrewed systems.",
      website: "https://www.textronsystems.com/products/ship-shore-connector#overview",
      previewImage: "",
    },
    {
      title: "Software Engineering Intern",
      company: "Textron Aviation",
      period: "June 2022 - September 2022",
      description: "During my time at Textron Aviation, I worked on the avionics systems for the Cessna Citation Longitude, the flagship of their business jet fleet. This role provided a front-row seat to the production of a high-demand aircraft, including deep exposure to production floor optimization and complex aerospace supply chain management. By witnessing the scale of operations required to support major enterprise clients like NetJets, I gained a profound understanding of how to maintain precision and quality control in a fast-paced manufacturing environment. Experiencing the aircraft's performance firsthand during flight trials solidified my perspective on the critical integration between avionics software and airframe dynamics.",
      website: "https://cessna.txtav.com/en/citation/longitude",
      previewImage: "",
    },
    {
      title: "Research Associate",
      company: "UCLA Smart Grid Energy Research Center",
      period: "June 2021 - September 2021",
      description: "As a freshman, I joined the lab of Dr. Rajit Gadh and Dr. Peter Chu to tackle one of the biggest bottlenecks in green logistics: Megawatt-scale charging. Electric trucks have massive battery capacities, but the downtime required for standard charging is a dealbreaker for the industry. Our research focused on the feasibility of a 1MW charger—an extreme engineering challenge that involved pushing materials to their absolute thermal limits. I was responsible for experimental setup and data analysis, often witnessing the literal 'burn-in' phase of hardware testing. This early exposure to high-stakes power systems and the 'build-break-learn' cycle solidified my passion for hardware engineering and the pursuit of solving mission-critical infrastructure problems.",
      website: "https://smartgrid.ucla.edu/index.htm",
      previewImage: "",
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
              className="group border-border bg-card transition-all hover:border-primary hover:shadow-tactical"
            >
              <div className="flex flex-col md:flex-row">
                {exp.previewImage && exp.previewImage.trim() !== "" && (
                  <div className="relative h-48 w-full overflow-hidden md:h-auto md:w-64 md:flex-shrink-0">
                    <img
                      src={exp.previewImage}
                      alt={`${exp.company} preview`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="mt-1 text-primary">{exp.company}</p>
                      <p className="mt-4 text-muted-foreground">{exp.description}</p>
                      {exp.website && exp.website.trim() !== "" && (
                        <a
                          href={exp.website}
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
                      {exp.period}
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

export default Career;
