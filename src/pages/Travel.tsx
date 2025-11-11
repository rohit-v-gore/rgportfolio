import Navigation from "@/components/Navigation";

type MapPin = {
  label: string;
  coordinates: string;
  top: string;
  left: string;
  note?: string;
};

const Travel = () => {
  const mapPins: MapPin[] = [
    {
      label: "Washington DC",
      coordinates: "38.9072° N, 77.0369° W",
      top: "39%",
      left: "32%",
      note: "North America HQ visit",
    },
    {
      label: "São Paulo",
      coordinates: "23.5505° S, 46.6333° W",
      top: "61%",
      left: "36%",
      note: "South America technology exchange",
    },
    {
      label: "London",
      coordinates: "51.5072° N, 0.1276° W",
      top: "39%",
      left: "47%",
      note: "European liaison briefing",
    },
    {
      label: "Nairobi",
      coordinates: "1.2921° S, 36.8219° E",
      top: "48%",
      left: "56%",
      note: "African innovation forum",
    },
    {
      label: "Tokyo",
      coordinates: "35.6762° N, 139.6503° E",
      top: "37%",
      left: "72%",
      note: "Asian systems workshop",
    },
    {
      label: "Sydney",
      coordinates: "33.8688° S, 151.2093° E",
      top: "74%",
      left: "79%",
      note: "Australia-Pacific fleet demo",
    },
    {
      label: "McMurdo Station",
      coordinates: "77.8419° S, 166.6863° E",
      top: "92%",
      left: "70%",
      note: "Antarctica research tour",
    },
  ];

  const countriesVisited = ["United Kingdom", "Japan", "Australia", "Canada", "Mexico"];
  const usCitiesVisited = ["San Diego, CA", "Panama City Beach, FL", "Washington, DC", "Los Angeles, CA", "New York, NY"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground">TRAVEL</h1>
          <div className="h-1 w-20 bg-primary" />
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Recon log of the cities and countries I&apos;ve moved through. For now, we keep it simple:
            a tactical world map snapshot ready for quick briefings.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-[#0c1209] shadow-[0_20px_60px_rgba(7,10,5,0.45)]">
            <div
              className="relative min-h-[520px] w-full bg-cover bg-center bg-no-repeat brightness-[0.62] contrast-[1.05] saturate-[0.8]"
              style={{
                backgroundImage:
                  "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2048px-World_map_-_low_resolution.svg.png')",
              }}
            >
              <div className="absolute inset-0">
                {mapPins.map((pin) => (
                  <div
                    key={pin.label}
                    className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                    style={{ top: pin.top, left: pin.left }}
                  >
                    <span className="mb-1 h-3.5 w-3.5 rounded-full border border-[#d6f1c3] bg-[#4b5320] shadow-[0_0_12px_rgba(214,241,195,0.45)] transition-transform duration-150 group-hover:scale-110" />
                    <div className="pointer-events-none text-center opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                      <div className="rounded-md border border-[#d6f1c3]/30 bg-black/80 px-3 py-2 shadow-lg backdrop-blur">
                        <p className="font-mono text-xs tracking-wide text-[#d6f1c3]">
                          {pin.label.toUpperCase()}
                        </p>
                        <p className="text-[10px] text-muted-foreground">{pin.coordinates}</p>
                        {pin.note && (
                          <p className="mt-1 text-[10px] text-primary/80">{pin.note}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 border border-[rgba(214,241,195,0.12)]" />
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card/80 p-8 backdrop-blur">
            <div className="space-y-4">
              <h3 className="font-mono text-lg font-semibold text-foreground">Country Logbook</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A simple register of the countries I&apos;ve set foot in. Add new entries as the list grows.
              </p>
              <div className="space-y-3">
                {countriesVisited.map((country) => (
                  <div
                    key={country}
                    className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 font-mono text-sm text-foreground shadow-inner"
                  >
                    {country}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-lg font-semibold text-foreground">U.S. Cities</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Stateside checkpoints—training gigs, deployments, and travel that mattered.
              </p>
              <div className="space-y-3">
                {usCitiesVisited.map((city) => (
                  <div
                    key={city}
                    className="rounded-lg border border-border bg-background px-4 py-3 font-mono text-sm text-muted-foreground shadow-sm"
                  >
                    {city}
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
