import { getNews, getTenders } from "@/sanity/sanity-utils";

export default async function sitemap() {
	const news = await getNews();
	return news.map((item) => ({
		url: `https://aspire.org.za/news/${item?.slug?.current}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: 0.5,
	}));
}
