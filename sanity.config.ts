import { createClient } from "next-sanity";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from './sanity/schemas'
import { groqdPlaygroundTool } from "groqd-playground";

const config = defineConfig({
	projectId: "0m4fu2cd",
	dataset: "production",
	title: "Aspire Content Studio",
	plugins: [structureTool()],
	apiVersion: "2023-05-03",
	basePath: "/admin",
	schema: { types: schemas },
	useCdn: true,
});


export default config
