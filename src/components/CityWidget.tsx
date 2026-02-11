import { useEffect, useState } from "react";
import { Card } from "./ui/card";

interface CityWidgetProps {
  city: string;
  timezone: string;
  latitude: number;
  longitude: number;
}

type WeatherState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; temp: number; condition: string }
  | { status: "error"; message: string };

const CityWidget = ({ city, timezone, latitude, longitude }: CityWidgetProps) => {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState<WeatherState>({ status: "idle" });

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(date));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  useEffect(() => {
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      setWeather({ status: "error", message: "Missing coordinates" });
      return;
    }

    const controller = new AbortController();

    const getWeatherDescription = (code: number) => {
      if (code === 0) return "Clear";
      if ([1, 2, 3].includes(code)) return "Partly cloudy";
      if ([45, 48].includes(code)) return "Fog";
      if ([51, 53, 55].includes(code)) return "Drizzle";
      if ([56, 57].includes(code)) return "Freezing drizzle";
      if ([61, 63, 65].includes(code)) return "Rain";
      if ([66, 67].includes(code)) return "Freezing rain";
      if ([71, 73, 75].includes(code)) return "Snow";
      if ([77].includes(code)) return "Snow grains";
      if ([80, 81, 82].includes(code)) return "Showers";
      if ([85, 86].includes(code)) return "Snow showers";
      if ([95].includes(code)) return "Thunderstorm";
      if ([96, 99].includes(code)) return "Thunderstorm w/ hail";
      return "Unknown";
    };

    const fetchWeather = async () => {
      setWeather({ status: "loading" });

      try {
        const url = new URL("https://api.open-meteo.com/v1/forecast");
        url.searchParams.set("latitude", latitude.toString());
        url.searchParams.set("longitude", longitude.toString());
        url.searchParams.set("current_weather", "true");
        url.searchParams.set("temperature_unit", "fahrenheit");
        url.searchParams.set("windspeed_unit", "mph");

        const response = await fetch(url.toString(), { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`API responded with status ${response.status}`);
        }

        const data = await response.json();

        if (!data?.current_weather) {
          throw new Error("Incomplete weather data");
        }

        setWeather({
          status: "success",
          temp: Math.round(data.current_weather.temperature),
          condition: getWeatherDescription(data.current_weather.weathercode),
        });
      } catch (error) {
        if (controller.signal.aborted) return;

        setWeather({
          status: "error",
          message: error instanceof Error ? error.message : "Failed to fetch weather",
        });
      }
    };

    fetchWeather();

    // Refresh weather every 10 minutes
    const weatherInterval = setInterval(fetchWeather, 10 * 60 * 1000);

    return () => {
      controller.abort();
      clearInterval(weatherInterval);
    };
  }, [city, latitude, longitude]);

  return (
    <Card className="group relative flex flex-col overflow-hidden border-border bg-card p-6 transition-all hover:border-primary hover:shadow-tactical">
      <div className="absolute inset-0 bg-gradient-tactical opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-muted-foreground">{city}</h3>
        </div>
        <div className="flex-1">
          {weather.status === "success" && (
            <div>
              <div className="flex flex-col">
                <span className="font-mono text-4xl font-bold text-primary">{weather.temp}°F</span>
                <span className="mt-2 text-sm text-muted-foreground">{weather.condition}</span>
              </div>
            </div>
          )}
          {weather.status === "loading" && (
            <div>
              <div className="flex flex-col">
                <span className="font-mono text-4xl font-bold text-primary">--°F</span>
                <span className="mt-2 text-sm text-muted-foreground">Updating</span>
              </div>
            </div>
          )}
          {weather.status === "error" && (
            <div>
              <span className="text-sm text-muted-foreground">Weather unavailable</span>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
          <p className="font-mono text-xs text-muted-foreground">{time}</p>
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        </div>
      </div>
    </Card>
  );
};

export default CityWidget;
