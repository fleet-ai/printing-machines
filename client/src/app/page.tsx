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
            Printing Machines Lab is an artificial intelligence research and product
            company. We&apos;re building a future where everyone has access to the
            knowledge and tools to make AI work for their unique needs and goals.
          </p>

          <p>
            While AI capabilities have advanced dramatically, key gaps remain. The
            scientific community&apos;s understanding of frontier AI systems lags behind
            rapidly advancing capabilities. Knowledge of how these systems are trained
            is concentrated within the top research labs, limiting both the public
            discourse on AI and people&apos;s abilities to use AI effectively. And,
            despite their potential, these systems remain difficult for people to
            customize to their specific needs and values. To bridge the gaps, we&apos;re
            building Printing Machines Lab to make AI systems more widely understood,
            customizable and generally capable.
          </p>

          <p>
            We are scientists, engineers, and builders who&apos;ve created some of the most
            widely used AI products, including{" "}
            <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">
              ChatGPT
            </a>{" "}
            and{" "}
            <a href="https://character.ai/" target="_blank" rel="noopener noreferrer">
              Character.ai
            </a>
            , open-weights models like{" "}
            <a href="https://mistral.ai/" target="_blank" rel="noopener noreferrer">
              Mistral
            </a>
            , as well as popular open source projects like{" "}
            <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
              PyTorch
            </a>
            ,{" "}
            <a href="https://github.com/openai/gym" target="_blank" rel="noopener noreferrer">
              OpenAI Gym
            </a>
            ,{" "}
            <a href="https://github.com/facebookresearch/fairseq" target="_blank" rel="noopener noreferrer">
              Fairseq
            </a>
            , and{" "}
            <a href="https://github.com/facebookresearch/segment-anything" target="_blank" rel="noopener noreferrer">
              Segment Anything
            </a>
            .
          </p>

          <h2>Science is better when shared</h2>

          <p>
            <em>Scientific progress is a collective effort.</em> We believe that we&apos;ll
            most effectively advance humanity&apos;s understanding of AI by collaborating
            with the wider community of researchers and builders. We plan to frequently
            publish technical blog posts, papers, and code. We think sharing our work
            will not only benefit the public, but also improve our own research culture.
          </p>

          <h2>AI that works for everyone</h2>

          <p>
            <em>Emphasis on human-AI collaboration.</em> Instead of focusing solely on
            making fully autonomous AI systems, we are excited to build multimodal
            systems that work with people collaboratively.
          </p>

          <p>
            <em>More flexible, adaptable, and personalized AI systems.</em> We see
            enormous potential for AI to help in every field of work. While current
            systems excel at programming and mathematics, we&apos;re building AI that can
            adapt to the full spectrum of human expertise and enable a broader spectrum
            of applications.
          </p>

          <h2>Solid foundations matter</h2>

          <p>
            <em>Model intelligence as the cornerstone.</em> In addition to our emphasis
            on human-AI collaboration and customization, model intelligence is crucial
            and we are building models at the frontier of capabilities in domains like
            science and programming. Ultimately, the most advanced models will unlock
            the most transformative applications and benefits, such as enabling novel
            scientific discoveries and engineering breakthroughs.
          </p>

          <p>
            <em>Infrastructure quality as a top priority.</em> Research productivity is
            paramount and heavily depends on the reliability, efficiency, and ease of
            use of infrastructure. We aim to build things correctly for the long haul,
            to maximize both productivity and security, rather than taking shortcuts.
          </p>

          <p>
            <em>Advanced multimodal capabilities.</em> We see multimodality as critical
            to enabling more natural and efficient communication, preserving more
            information, better capturing intent, and supporting deeper integration into
            real-world environments.
          </p>

          <h2>Learning by doing</h2>

          <p>
            <em>Research and product co-design.</em> Products enable iterative learning
            through deployment, while great products and research strengthen each other.
            Products keep us grounded in reality and guide us to solve the most
            impactful problems.
          </p>

          <p>
            <em>Empirical and iterative approach to AI safety.</em> The most effective
            safety measures come from a combination of proactive research and careful
            real-world testing. We plan to contribute to AI safety by (1) maintaining a
            high safety bar–preventing misuse of our released models while maximizing
            users&apos; freedom, (2) sharing best practices and recipes for how to build
            safe AI systems with the industry, and (3) accelerating external research on
            alignment by sharing code, datasets, and model specs. We believe that
            methods developed for present day systems, such as effective red-teaming and
            post-deployment monitoring, provide valuable insights that will extend to
            future, more capable systems.
          </p>

          <p>
            <em>Measure what truly matters.</em> We&apos;ll focus on understanding how our
            systems create genuine value in the real world. The most important
            breakthroughs often come from rethinking our objectives, not just optimizing
            existing metrics.
          </p>

          <h2 id="join-us">Meet us</h2>

          <p>
            We&apos;re building AI systems that push technical boundaries while delivering
            real value to as many people as possible. Our team combines rigorous
            engineering with creative exploration, and we&apos;re looking for collaborators
            to help shape this vision.
          </p>

          <p>
            Follow us on X at{" "}
            <a href="https://x.com/thinkymachines" target="_blank" rel="noopener noreferrer">
              @thinkymachines
            </a>{" "}
            for updates or see our open roles.
          </p>

          <div className="my-10">
            <Button asChild>
              <a
                href="https://job-boards.greenhouse.io/thinkingmachines"
                target="_blank"
                rel="noopener noreferrer"
              >
                See open roles
              </a>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
