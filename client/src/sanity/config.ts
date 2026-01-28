import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "./schemaTypes";

export const config = defineConfig({
  name: "default",
  title: "Printing Machines",

  projectId: "f7noohnr",
  dataset: "production",

  basePath: "/studio",

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});
