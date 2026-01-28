import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "f7noohnr",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const testPost = {
  _type: "post",
  title: "Teaching Machines to See: Our First Experiments with Embodied Vision",
  slug: { _type: "slug", current: "teaching-machines-to-see" },
  publishedAt: "2026-01-27T12:00:00Z",
  excerpt:
    "What happens when you give an AI a camera and ask it to find beauty? We share our early experiments connecting vision models to physical drawing machines.",
  body: [
    {
      _type: "block",
      _key: "intro1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "intro1span",
          text: "For the past three months, we've been running an experiment. We connected a vision-language model to a simple drawing machine—a modified pen plotter with a camera mounted above its workspace—and asked it a question: ",
          marks: [],
        },
        {
          _type: "span",
          _key: "intro1span2",
          text: "What do you find interesting?",
          marks: ["em"],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "intro2",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "intro2span",
          text: "The results have surprised us.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "h2_1",
      style: "h2",
      children: [
        { _type: "span", _key: "h2_1span", text: "The Setup", marks: [] },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "setup1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "setup1span",
          text: "Our setup is deliberately simple. The machine sees its own workspace through a downward-facing camera. It can make marks with ink on paper. And it can observe the results of those marks in real-time.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "setup2",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "setup2span",
          text: "This creates something that diffusion models fundamentally lack: a ",
          marks: [],
        },
        {
          _type: "span",
          _key: "setup2span2",
          text: "feedback loop",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "setup2span3",
          text: ". The machine doesn't generate an image and stop. It makes a mark, sees the mark, decides what to do next. Each stroke is a decision informed by everything that came before.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "h2_2",
      style: "h2",
      children: [
        {
          _type: "span",
          _key: "h2_2span",
          text: "What We Observed",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "obs1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "obs1span",
          text: "Three patterns emerged that we didn't anticipate:",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "list1",
      style: "normal",
      listItem: "number",
      level: 1,
      children: [
        {
          _type: "span",
          _key: "list1span",
          text: "The machine developed preferences",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "list1span2",
          text: ". Given free rein, it consistently returned to certain forms—tight spirals, overlapping circles, crosshatched textures. Not because we prompted for them, but because it found them \"interesting\" by whatever internal metric it developed.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "list2",
      style: "normal",
      listItem: "number",
      level: 1,
      children: [
        {
          _type: "span",
          _key: "list2span",
          text: "Mistakes became features",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "list2span2",
          text: ". When the pen skipped or the paper shifted, the machine incorporated these \"errors\" into subsequent decisions. A smudge would become the seed of a new pattern. This felt meaningfully different from the pristine outputs of traditional generative models.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "list3",
      style: "normal",
      listItem: "number",
      level: 1,
      children: [
        {
          _type: "span",
          _key: "list3span",
          text: "It learned to stop",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "list3span2",
          text: ". Perhaps most surprisingly, the machine developed a sense of completion. Not every drawing was worked to exhaustion. Some were left spare. The machine would pause, observe, and decide: this is done.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "h2_3",
      style: "h2",
      children: [
        {
          _type: "span",
          _key: "h2_3span",
          text: "What This Means",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "meaning1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "meaning1span",
          text: "We're not claiming these machines are \"creative\" in the way humans are. But we are seeing something that pure diffusion models cannot achieve: ",
          marks: [],
        },
        {
          _type: "span",
          _key: "meaning1span2",
          text: "emergent aesthetic judgment through physical interaction",
          marks: ["em"],
        },
        { _type: "span", _key: "meaning1span3", text: ".", marks: [] },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "meaning2",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "meaning2span",
          text: "The irreversibility of ink on paper matters. The machine can't undo. It can only respond. And in that constraint, something interesting happens.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "quote1",
      style: "blockquote",
      children: [
        {
          _type: "span",
          _key: "quote1span",
          text: "The technique is itself a tool for thought.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: "block",
      _key: "closing1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "closing1span",
          text: "This is just the beginning. In future posts, we'll share more about our technical setup, the specific models we're using, and where we see this research heading. For now, we wanted to share what has us excited: the possibility of AI that doesn't just generate, but ",
          marks: [],
        },
        {
          _type: "span",
          _key: "closing1span2",
          text: "discovers",
          marks: ["em"],
        },
        { _type: "span", _key: "closing1span3", text: ".", marks: [] },
      ],
      markDefs: [],
    },
  ],
};

async function main() {
  if (!process.env.SANITY_TOKEN) {
    console.error("Please set SANITY_TOKEN environment variable");
    console.log("You can create a token at: https://www.sanity.io/manage/project/f7noohnr/api#tokens");
    process.exit(1);
  }

  try {
    const result = await client.create(testPost);
    console.log("Created post:", result._id);
    console.log("Now publish it in the studio at /studio");
  } catch (err) {
    console.error("Error creating post:", err.message);
  }
}

main();
