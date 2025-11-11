import Navigation from "@/components/Navigation";
import CityWidget from "@/components/CityWidget";

const Index = () => {
  const cities = [
    {
      name: "Washington DC",
      timezone: "America/New_York",
      latitude: 38.9072,
      longitude: -77.0369,
    },
    {
      name: "New York",
      timezone: "America/New_York",
      latitude: 40.7128,
      longitude: -74.006,
    },
    {
      name: "San Francisco",
      timezone: "America/Los_Angeles",
      latitude: 37.7749,
      longitude: -122.4194,
    },
    {
      name: "Los Angeles",
      timezone: "America/Los_Angeles",
      latitude: 34.0522,
      longitude: -118.2437,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-block border border-primary bg-gradient-tactical px-4 py-2">
            <span className="font-mono text-sm text-primary">OPERATIONAL STATUS: ACTIVE</span>
          </div>
          <h1 className="mb-4 font-mono text-5xl font-bold tracking-wider text-foreground md:text-7xl">
            rohit-v-gore
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            This is where I store information about myself. Made it defense themed because I have spent my whole career in defense and embedded systems so far.
          </p>
        </div>

        {/* City Dashboard */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-4">
            <h2 className="font-mono text-2xl font-bold text-foreground">COMMAND CENTERS</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <CityWidget
                key={city.name}
                city={city.name}
                timezone={city.timezone}
                latitude={city.latitude}
                longitude={city.longitude}
              />
            ))}
          </div>
        </div>

        {/* Grid Pattern Decoration */}
        <div className="pointer-events-none fixed inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </main>
    </div>
  );
};

export default Index;
