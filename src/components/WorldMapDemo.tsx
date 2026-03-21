import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function WorldMapDemo() {
  return (
    <div className="py-24 bg-white w-full border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="font-bold text-3xl md:text-5xl text-black font-display mb-4">
          Global{" "}
          <span className="text-primary">
            {"Talent".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          {", Local Impact"}
        </p>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Connecting the brightest minds from across the world directly to Europe's leading tech hubs. We break down the borders so you can focus on innovation.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-6">
        <WorldMap
          lineColor="#047857" // emerald/green tint matching the platform's primary color
          dots={[
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 52.5200, lng: 13.4050 }, // Berlin
            },
            {
              start: { lat: 37.7749, lng: -122.4194 }, // SF / Silicon Valley
              end: { lat: 52.3676, lng: 4.9041 }, // Amsterdam
            },
            {
              start: { lat: -23.5505, lng: -46.6333 }, // Sao Paulo, Brazil
              end: { lat: 51.5074, lng: -0.1278 }, // London
            },
            {
              start: { lat: 14.5995, lng: 120.9842 }, // Manila, Philippines
              end: { lat: 48.8566, lng: 2.3522 }, // Paris
            },
            {
              start: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              end: { lat: 59.3293, lng: 18.0686 }, // Stockholm
            },
            {
              start: { lat: 30.0444, lng: 31.2357 }, // Cairo, Egypt
              end: { lat: 48.1351, lng: 11.5820 }, // Munich
            },
          ]}
        />
      </div>
    </div>
  );
}
