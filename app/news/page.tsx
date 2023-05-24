import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { getNews } from "@/sanity/sanity-utils";
import NewsArticle from "./NewsArticle";

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
