import { TypographyH1 } from "@/components/typography";
import {Button} from "@/components/ui/button";
import  Container  from "@/components/ui/Container";
import { getTender } from "@/sanity/sanity-utils";
import fromatter from "@/utils/formatCurrency"
import Link from "next/link";

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
        <h2 className="text-lg mt-2 font-semibold">
          Document Price: {fromatter(tender.price!)}
        </h2>
        <Link href={tender.tenderDocument!}>
          {" "}
          <Button className="mt-4" >
            Download Document
          </Button>
        </Link>
      </div>
    </Container>
  );
};
export default page;
