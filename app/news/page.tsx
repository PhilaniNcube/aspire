import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { getNews } from "@/sanity/sanity-utils";
import NewsArticle from "./NewsArticle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News and Blog Articles | Aspire",
  description:
    "Stay up to date with the latest news coming out of Amathole District and the Amathole Development Agency - Aspire",
  keywords:
    "open tenders, bidding, procurement, aspire, tenders, business, opportunities, contracts, proposals, bids, request for quotes",
  openGraph: {
    title: "Latest News and Blog Articles | Aspire",
    description:
      "Stay up to date with the latest news coming out of Amathole District and the Amathole Development Agency - Aspire",
    url: "https://aspire.co.za/news",
    type: "website",
    images: ["https://aspire.co.za/images/public-works.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest News and Blog Articles | Aspire",
    description:
      "Stay up to date with the latest news coming out of Amathole District and the Amathole Development Agency - Aspire",
  },
};

const page = async () => {

  const newsData = getNews()

  const [news] = await Promise.all([newsData])

  return <Container>
    <TypographyH1>News</TypographyH1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {news.length === 0 ? <p className="text-3xl font-semibold">No News Articles</p> : news.map((newsItem) => (
        <NewsArticle key={newsItem._id} newsItem={newsItem} />
      ))}
    </div>
  </Container>;
};
export default page;
