import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header showNavLogo={false} showMainLogo={true} showAnnouncement={true} />

      {/* Main Content */}
      <main className="main-content flex-1">
        <article className="content">
          <p>
            Printing Machines Lab is a research project teaching AI to create the
            way people do. Through touch, trial, and time in the physical world.  
            We&apos;re building toward agents that can produce genuine works inspired by their own perception and experience of the world, making use of physical machines and operating real storefronts. 
          </p>

          <p>
            While AI image and video generation has advanced remarkably, most AI art remains
            the result of a fundamentally disembodied process. Diffusion models produce complete images in
            what is effectively a single pass. Artists don&apos;t work this way. They discover what
            they&apos;re making through the act of making it. The technique is itself a
            tool for thought. Most AI art is made without this exploration, the
            getting lost, the connection to material, the accumulated decisions
            that build toward true expression. We want to help build an AI with
            not only empathy for human artists, but also its own drive for
            self-expression. This will be learned through physical affordances in
            the real world with real machines, real materials, and the
            irreversible commitment of mark on surface. Confronting the real and
            messy world and using it to craft meaning.
          </p>

          <h2 id="join-us">Meet us</h2>

          <p>
            We are artists, researchers, and technologists who&apos;ve contributed to some cool AI products like{" "}
            <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">ElevenLabs</a>
            {", "}
            <a href="https://www.rox.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">Rox</a>
            {", and "}
            <a href="https://fleetai.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">Fleet AI</a>
            .
          </p>

          <div className="my-10">
            <Button asChild>
              <a
                href="https://job-boards.greenhouse.io/thinkingmachines"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the team
              </a>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
