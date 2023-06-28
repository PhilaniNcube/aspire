import Container from "@/components/ui/Container";
import { getTenders } from "@/sanity/sanity-utils";
import TendersTable from "./TendersTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Tenders | Aspire",
  description:
    "Explore the latest open tenders available for bids on our website. Find the best opportunities for your business and submit your proposals to secure contracts",
    keywords: "open tenders, bidding, procurement, aspire, tenders, business, opportunities, contracts, proposals, bids, request for quotes",
openGraph: {
    title: "Open Tenders | Aspire",
    description: "Explore the latest open tenders available for bids on our website. Find the best opportunities for your business and submit your proposals to secure contracts",
    url: "https://aspire.co.za/procurement",
    type: "website",
    images: ["https://aspire.co.za/images/public-works.jpg"]
},
twitter: {
    card: "summary_large_image",
    title: "Open Tenders | Aspire",
        description: "Explore the latest open tenders available for bids on our website. Find the best opportunities for your business and submit your proposals to secure contracts",


}

};

export const revalidate = 5;

const page = async () => {

  const tendersData = getTenders()

  const [tenders] = await Promise.all([tendersData]);

  return <Container>
    <TendersTable tenders={tenders} />
  </Container>;
};
export default page;
