import { memo, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
  Sphere,
} from "react-simple-maps";
import clsx from "clsx";

type TacticalMarker = {
  name: string;
  coordinates: [number, number];
  description?: string;
};

interface TacticalMapProps {
  geographyUrl: string;
  highlightedRegions?: string[];
  markers?: TacticalMarker[];
  variant?: "world" | "usa";
  projectionConfig?: {
    scale?: number;
    center?: [number, number];
    rotate?: [number, number, number];
  };
  className?: string;
  showGraticule?: boolean;
}

const TacticalMap = memo(
  ({
    geographyUrl,
    highlightedRegions = [],
    markers = [],
    variant = "world",
    projectionConfig,
    className,
    showGraticule = true,
  }: TacticalMapProps) => {
    const visitedLookup = useMemo(
      () =>
        new Set(
          highlightedRegions.map((region) => region.trim().toLowerCase())
        ),
      [highlightedRegions]
    );

    const config = useMemo(() => {
      if (variant === "usa") {
        return {
          projection: "geoAlbersUsa",
          config: {
            scale: 1000,
            center: [-97, 39],
            ...projectionConfig,
          },
        } as const;
      }

      return {
        projection: "geoEqualEarth",
        config: {
          scale: 155,
          center: [0, 18],
          ...projectionConfig,
        },
      } as const;
    }, [variant, projectionConfig]);

    return (
      <div
        className={clsx(
          "tactical-map relative h-full w-full overflow-hidden rounded-xl border border-border bg-[#0b1108]",
          className
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(79,89,39,0.35),transparent_65%),radial-gradient(circle_at_80%_120%,rgba(8,12,5,0.7),transparent_75%)]" />
        <ComposableMap
          projection={config.projection}
          projectionConfig={config.config}
          className="relative h-full w-full text-foreground"
        >
          {variant === "world" && (
            <>
              <Sphere stroke="#1c2717" strokeWidth={1.25} fill="#0b1108" />
              {showGraticule && (
                <Graticule stroke="#24321c" strokeWidth={0.4} />
              )}
            </>
          )}

          <Geographies geography={geographyUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name =
                  (geo.properties?.NAME_LONG as string) ||
                  (geo.properties?.NAME as string) ||
                  (geo.properties?.name as string) ||
                  "";
                const isVisited = visitedLookup.has(name.trim().toLowerCase());
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: isVisited
                          ? "rgba(83, 93, 43, 0.85)"
                          : "rgba(18, 26, 20, 0.85)",
                        stroke: "rgba(214, 241, 195, 0.25)",
                        strokeWidth: 0.6,
                        outline: "none",
                      },
                      hover: {
                        fill: "rgba(121, 135, 64, 0.95)",
                        stroke: "rgba(214, 241, 195, 0.4)",
                        strokeWidth: 0.8,
                        outline: "none",
                      },
                      pressed: {
                        fill: "rgba(121, 135, 64, 1)",
                        stroke: "rgba(214, 241, 195, 0.5)",
                        strokeWidth: 1,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {markers.map((marker) => (
            <Marker
              key={`${marker.name}-${marker.coordinates.join(",")}`}
              coordinates={marker.coordinates}
            >
              <g transform="translate(-6, -6)">
                <circle
                  r={6}
                  fill="rgba(84, 97, 44, 0.95)"
                  stroke="rgba(214, 241, 195, 0.75)"
                  strokeWidth={1.2}
                />
                <circle
                  r={2.2}
                  fill="rgba(214, 241, 195, 0.95)"
                  stroke="rgba(8, 12, 5, 0.6)"
                  strokeWidth={0.6}
                />
              </g>
              <text
                textAnchor="middle"
                y={-10}
                className="font-mono text-[10px] tracking-widest text-[#b5c48a] drop-shadow-sm"
              >
                {marker.name}
              </text>
              {marker.description && (
                <text
                  textAnchor="middle"
                  y={-2}
                  className="font-sans text-[9px] text-muted-foreground"
                >
                  {marker.description}
                </text>
              )}
            </Marker>
          ))}
        </ComposableMap>
        <div className="pointer-events-none absolute inset-0 border border-[rgba(214,241,195,0.08)] mix-blend-screen" />
      </div>
    );
  }
);

TacticalMap.displayName = "TacticalMap";

export default TacticalMap;
