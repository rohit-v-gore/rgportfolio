import Navigation from "@/components/Navigation";

type Location = {
  name: string;
  description?: string;
};

const Travel = () => {
  const countriesVisited: Location[] = [
    { name: "United Arab Emirates", description: "Burj Kalifa, San Dune Buggy, Grand Sheikh Mosque, Emirates, Palm Jumeirah" },
    { name: "Ireland", description: "Fish and Chips, Guinness Factory, Rugby" },
    { name: "Netherlands", description: "Amsterdam" },
    { name: "Jamaica", description: "Montego bay resort, Kayaking, Windsurfing, Warm Ocean Temp" },
    { name: "Portugal", description: "4 Palaces, Lisbon, Wine Tasting" },
    { name: "Egypt", description: "Cairo, Giza, Pyramids, Tombs, Temples" },
    { name: "Taiwan", description: "Taipei" },
    { name: "Switzerland", description: "Cheese Fondue, Interlaaken, Matterhorn Skiing, Designer, Lindt Factory" },
    { name: "Iceland", description: "No actual ice, caves, Tectonic Plate Snorkeling, Volcanoes" },
    { name: "France", description: "Pan au chocolat, Eiffel Tower, Lourve, Cathedrals" },
    { name: "Belgium", description: "Brussels, Beer Flights, Waffles, Chocolate" },
    { name: "Italy", description: "Pizza, Colosseum, Leaning Tower of Pisa, Lamborghini Factory, Pagani Factory, Rome Ruins" },
    { name: "Indonesia", description: "Bali, Amazing Villas" },
    { name: "Japan", description: "Tokyo, Kyoto, Shinjuku, Gold Temple, Electric City, Shinkansen" },
    { name: "Peru", description: "Machu Pichu, LLamas, Cuzco, Ruins" },
    { name: "Costa Rica", description: "Volanoes, White Water Rafting, Ziplining, Jetski, ATV, San Jose" },
    { name: "Panama", description: "Beaches, Panama City" },
    { name: "Aruba", description: "Beahes, Windsurf" },
    { name: "Mexico", description: "Cabo San Lucas, Cancun, Chichen Itza" },
    { name: "Canada", description: "Niagra Falls, Vancouver" },
    { name: "India", description: "Mumbai, Pune, Taj Mahal, New Delhi, Lucknow, Trump Tower" },
    { name: "UK", description: "Big Bentley, Beer, Crystal Palace Soccer, Buckingham Palace, Cathedrals" },
    { name: "Germany", description: "Frankfurt, Stuttgart, Porsche Museum, BMW Velt, Beer" },
    { name: "Bahamas", description: "Disney Cruise, Beaches, Sand Castles" },
  ];

  const usCitiesVisited: Location[] = [
    { name: "San Diego, CA", description: "Zoo" },
    { name: "Panama City Beach, FL", description: "Naval Surface Warfare Center" },
    { name: "Washington, DC", description: "Home Base" },
    { name: "Los Angeles, CA", description: "College, Dodgers Games, Nightlife" },
    { name: "New York, NY", description: "Fun City with Friends, Giants Games" },
    { name: "Honolulu, HI", description: "Beaches" },
    { name: "Juneau, AK", description: "laciers" },
    { name: "Arlington, VA", description: "Sub-home Base" },
    { name: "Boston, MA", description: "Cambridge" },
    { name: "Baltimore, MD", description: "Federal Hill, Orioles Games" },
    { name: "Las Vegas, NV", description: "Gambling, Clubbing" },
    { name: "New Orleans, LA", description: "Imternship, Creole, Seafood, Beignet, Alligators" },
    { name: "Seattle, WA", description: "Space Needle, Voodoo Donuts" },
    { name: "San Fransisco, CA", description: "Tech Hub" },
    { name: "Chicago, IL", description: "Bean" },
    { name: "Wichita, KS", description: "First Internship, Private Jet Company" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground">TRAVEL</h1>
          <div className="h-1 w-20 bg-primary" />
          <p className="mt-4 max-w-3xl text-muted-foreground">
            A log of all of the places I have traveled. I would love to populate this more each year. Let's see if my career allows it.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card/80 p-8 backdrop-blur">
            <div className="space-y-4">
              <h3 className="font-mono text-lg font-semibold text-foreground">
                Visited Countries ({countriesVisited.length})
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                My parents love to travel. They took us many places growing up. I have continued this hobby.
              </p>
              <div className="space-y-3">
                {countriesVisited.map((country) => (
                  <div
                    key={country.name}
                    className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 shadow-inner"
                  >
                    <h4 className="font-mono text-sm font-semibold text-foreground">{country.name}</h4>
                    {country.description && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {country.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card/80 p-8 backdrop-blur">
            <div className="space-y-4">
              <h3 className="font-mono text-lg font-semibold text-foreground">
                Visited U.S. Major Cities ({usCitiesVisited.length})
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                My dad has been to like 47 US states. I feel like I need to get to 50 and visit more cities before him.
              </p>
              <div className="space-y-3">
                {usCitiesVisited.map((city) => (
                  <div
                    key={city.name}
                    className="rounded-lg border border-border bg-background px-4 py-3 shadow-sm"
                  >
                    <h4 className="font-mono text-sm font-semibold text-foreground">{city.name}</h4>
                    {city.description && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {city.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Travel;
