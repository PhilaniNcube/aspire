import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { getNewsArticle, getProject, getNews } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { CloudSnowIcon, LocateIcon } from "lucide-react";
import Image from "next/image";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const page = async ({ params: { slug } }: Props) => {
  const article = await getNewsArticle(slug);

  return (
    <div>
      <Container>
        <TypographyH1>{article.name}</TypographyH1>

        <div className="grid grid-cols-1 gap-4 mt-6 font-medium leading-7 lg:gap-x-8 text-neutral-700 md:grid-cols-2">
          <div>
            {" "}
            <Separator className="my-4" />
            <p className="flex items-center space-x-3 text-semibold">

              <span className="text-2xl text-black">Author: {article.author}</span>
            </p>
            <Separator className="my-4" />
            <PortableText value={article.content!} />
          </div>
        {article.image && <Image src={article.image} width={1920} height={1280} alt={article.name!} className="object-cover w-full rounded-lg" />}
        </div>
      </Container>
    </div>
  );
};
export default page;


export async function generateStaticParams() {
  const articlesData =  getNews();

  const [articles] = await Promise.all([articlesData]);

  return articles.map((article) => ({
    params: {
      slug: article.slug?.current,
    },
  }));
}
