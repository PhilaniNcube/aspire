import { getProjects } from "@/sanity/sanity-utils";

export default async function sitemap() {

  const projects = await getProjects();
		return projects.map((project) => ({
			url: `https://aspire.org.za/projects/${project?.slug?.current}`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		}));

}
