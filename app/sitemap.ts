import { getDocs, getNews, getProjects, getTenders } from "@/sanity/sanity-utils";
import type { MetadataRoute } from "next";



export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const docs = await getDocs();
  const news = await getNews();
  const tenders = await getTenders();
  const projects = await getProjects();

  const docUrls = docs.map((doc) => ({
    url: `https://aspire.org.za/documents/${doc.slug.current}`,
    lastModified: doc._updatedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const newsUrls = news.map((news) => ({
    url: `https://aspire.org.za/news/${news?.slug?.current}`,
    lastModified: news._updatedAt,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const tenderUrls = tenders.map((tender) => ({
    url: `https://aspire.org.za/procurement/${tender?.slug?.current}`,
    lastModified: tender._updatedAt,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const projectsUrls  = projects.map((project) => ({
    url: `https://aspire.org.za/procurement/${project?.slug?.current}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }))


	return [
		{
			url: "https://aspire.org.za",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://aspire.org.za/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://aspire.org.za/directors",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		{
			url: "https://aspire.org.za/documents",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		{
			url: "https://aspire.org.za/investments",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		{
			url: "https://aspire.org.za/news",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		{
			url: "https://aspire.org.za/procurement",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		{
			url: "https://aspire.org.za/projects",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		{
			url: "https://aspire.org.za/publications",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		{
			url: "https://aspire.org.za/vacancies",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},

	];
}
