import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

const printers = [
  {
    name: "Gustav",
    image: "/gustav.png",
    type: "3D Printer",
    description: "Bambu Lab P2S with AMS 2",
  },
  {
    name: "JanVan",
    image: "/janvan.png",
    type: "3D Printer",
    description: "Bambu Lab P1S",
  },
  {
    name: "Albrecht",
    image: "/albrecht.png",
    type: "Pen Plotter",
    description: "XDRAW A4",
  },
  {
    name: "Fede",
    image: "/fede.png",
    type: "Pen Plotter",
    description: "iDraw H SE",
  },
];

export default function Printers() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-16 flex-1">
        <h1 className="text-4xl font-normal mb-4">Our Printers</h1>
        <p className="text-lg text-muted mb-12 leading-relaxed max-w-2xl">
          Meet the machines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {printers.map((printer) => (
            <div
              key={printer.name}
              className="group border border-border rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative overflow-hidden bg-secondary/30">
                <Image
                  src={printer.image}
                  alt={printer.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-medium">{printer.name}</h2>
                  <span className="text-sm text-muted bg-secondary px-3 py-1 rounded-full font-sans">
                    {printer.type}
                  </span>
                </div>
                <p className="text-muted">{printer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
