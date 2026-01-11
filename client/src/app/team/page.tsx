import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const contributors = [
  { name: "James Zhou", affiliation: "ElevenLabs", logo: "/logos/elevenlabs.svg", logoHeight: "h-3" },
  { name: "Jerry Zhou", affiliation: "Rox", logo: "/logos/Black Logo.png", logoHeight: "h-4" },
  { name: "Nicolai Ouporov", affiliation: "Fleet AI", logo: "/logos/fleet-wordmark.svg", logoHeight: "h-5" },
  { name: "Deniz Zorlu", affiliation: "Fleet AI", logo: "/logos/fleet-wordmark.svg", logoHeight: "h-5" },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header showNavLogo={true} showMainLogo={false} />

      <main className="max-w-5xl mx-auto px-6 py-16 flex-1">
        <h1 className="text-4xl font-normal mb-8">Contributors</h1>
        
        <p className="text-lg mb-12 leading-relaxed">
          We're looking for more contributors! If you are interested in collaborating, please email <a href="mailto:nic@fleet.so" className="underline hover:no-underline">nic@fleet.so</a>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border">
          {contributors.map((person) => (
            <div
              key={person.name}
              className="p-6 border-b border-r border-border flex flex-col min-h-[120px]"
            >
              <h2 className="font-semibold text-xl text-foreground">
                {person.name}
              </h2>
              <div className="mt-auto">
                <Image 
                  src={person.logo} 
                  alt={person.affiliation} 
                  width={80} 
                  height={20}
                  className={`${person.logoHeight} w-auto object-contain`}
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
