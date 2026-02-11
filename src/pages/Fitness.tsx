import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Fitness = () => {
  const liftingNumbers = {
    bench: "215",
    squat: "195",
    deadlift: "280",
    mileTime: "5.50",
  };

  const activities = [
    {
      name: "Los Angeles Marathon",
      frequency: "March 2024",
      metric: "4:15:37",
      description: "My first marathon. One of my best friends, Shrujal who was my roomate at UCLA told me to sign up with him and get the marathon done before graduation and thanks to him we did.",
    },
    {
      name: "Baltimore Half Marathon",
      frequency: "October 2024",
      metric: "2:06:34",
      description: "My first half marathon since college ended and that post-grad fitness decline did hit here. Also a very hilly race.",
    },
    {
      name: "Army Ten Miler",
      frequency: "October 2024",
      metric: "1:26:04",
      description: "DC is not that hilly so I did not struggle with this one as much but I do want to do this one again sometime.",
    },
    {
      name: "Spartan 10K",
      frequency: "September 2024",
      metric: "---",
      description: "A completely different type of race that combines running with obstacles. Although I did not store the time information I really ejoyed using my upper body to do random obstacles. I will definitely do this one again.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground">FITNESS</h1>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="group border-border bg-card p-6 transition-all hover:border-primary hover:shadow-tactical">
            <div className="mb-4 h-2 w-2 rounded-full bg-primary" />
            <h3 className="text-xl font-bold text-foreground">Records</h3>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Bench Press</p>
                <p className="mt-1 font-mono text-lg font-semibold text-primary">{liftingNumbers.bench} lbs</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Squat</p>
                <p className="mt-1 font-mono text-lg font-semibold text-primary">{liftingNumbers.squat} lbs</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Deadlift</p>
                <p className="mt-1 font-mono text-lg font-semibold text-primary">{liftingNumbers.deadlift} lbs</p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">Fastest Mile</p>
                <p className="mt-1 font-mono text-lg font-semibold text-primary">{liftingNumbers.mileTime}</p>
              </div>
            </div>
          </Card>
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group border-border bg-card p-6 transition-all hover:border-primary hover:shadow-tactical"
            >
              <div className="mb-4 h-2 w-2 rounded-full bg-primary" />
              <h3 className="text-xl font-bold text-foreground">{activity.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{activity.frequency}</p>
              <p className="mt-4 font-mono text-lg text-primary">{activity.metric}</p>
              <p className="mt-4 text-sm text-muted-foreground">{activity.description}</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Fitness;
