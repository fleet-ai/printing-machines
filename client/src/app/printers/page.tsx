import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function Printers() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-16 flex-1">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-normal">Printers</h1>
          <Badge>Coming Soon</Badge>
        </div>
        
        <p className="text-lg text-muted mb-8 leading-relaxed">
          A new way to interact with AI models.
        </p>

        <div className="border border-border rounded-lg p-8 bg-secondary/30">
          <p className="text-center text-muted">
            We&apos;re working on something new. Check back soon for updates.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
