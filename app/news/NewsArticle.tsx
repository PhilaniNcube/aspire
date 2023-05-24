import { TypographyH4 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { News } from "@/schema";
import Image from "next/image";
import Link from "next/link";

type Props = {
  newsItem: News
}

const NewsArticle = ({newsItem}:Props) => {
  return <article className="overflow-hidden rounded-md w-full">
    <Image src={newsItem.image ? newsItem.image : "/images/news.jpg" } width={1920} height={1280} alt={newsItem.name!} className="w-full aspect-video object-cover" />
    <div className="p-3">
      <TypographyH4>{newsItem.name}</TypographyH4>
      <p>Author: {newsItem.author}</p>

      <div className="mt-3">
        <Link href={`/news/${newsItem.slug?.current}`}><Button type="button" className="bg-aspire text-white">Read More</Button></Link>
      </div>
    </div>
  </article>;
};
export default NewsArticle;
