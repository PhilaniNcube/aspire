import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from './sanity/schemas';

const config = defineConfig({
	projectId: "0m4fu2cd",
	dataset: "production",
	title: "Aspire Content Studio",
	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						...S.documentTypeListItems().filter(
							(listItem) => listItem.getId() !== "investmentsPage",
						),
						S.listItem()
							.title("Investments Page")
							.id("investmentsPage-singleton")
							.child(
								S.document()
									.schemaType("investmentsPage")
									.documentId("investmentsPage"),
							),
					]),
		}),
	],
	apiVersion: "2023-05-03",
	basePath: "/admin",
	schema: { types: schemas },
	useCdn: true,
});


export default config
