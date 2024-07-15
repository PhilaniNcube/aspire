import { getTenders } from "@/sanity/sanity-utils";

export default async function sitemap() {
	const tenders = await getTenders();
	return tenders.map((tender) => ({
		url: `https://aspire.org.za/procurement/${tender?.slug?.current}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: 0.5,
	}));
}
