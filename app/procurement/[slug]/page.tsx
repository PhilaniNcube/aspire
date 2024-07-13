import { TypographyH1 } from "@/components/typography";
import {Button} from "@/components/ui/button";
import  Container  from "@/components/ui/Container";
import { getTender, getTenders } from "@/sanity/sanity-utils";
import fromatter from "@/utils/formatCurrency"
import Link from "next/link";

export const revalidate = 5;

type Props ={
  params: {
    slug: string;
  }
}

const page = async ({ params: { slug } }: Props) => {

  const tender = await getTender(slug);


  return (
    <Container>
      <TypographyH1>Tender Details</TypographyH1>
      <div className="w-full py-8">
        <h2 className="text-2xl font-medium">{tender.name}</h2>
        <p className="text-md">{tender.description}</p>
        <strong>Closing Date: {tender.closingDate}</strong>
        <h2 className="mt-2 text-lg font-semibold">
          Document Price: {tender.price ? fromatter(tender.price) : "Free"}
        </h2>

        {tender.awarded && tender.closeOutDocument ? (
          <Link href={tender.closeOutDocument}>
            {" "}
            <Button className="mt-4">Close Out Document</Button>
          </Link>
        ) : (
          <Link href={tender.tenderDocument ? tender.tenderDocument : ''}>
            {" "}
            <Button className="mt-4">Download Document</Button>
          </Link>
        )}
      </div>
    </Container>
  );
};
export default page;


export async function generateStaticParams() {
  const tenderData = getTenders();

  const [tender] = await Promise.all([tenderData]);

  return tender.map((tender) => ({
    params: {
      slug: tender.slug?.current,
    },
  }));
}
