import Container from "@/components/ui/Container";
import { getClosedBids, getClosedTenders } from "@/sanity/sanity-utils";
import TendersTable from "../TendersTable";
import type { Metadata } from "next";
import { Redis } from "@upstash/redis";
import ViewsBadge from "@/components/views-badge";
import { ReportView } from "../awarded/view";

const redis = Redis.fromEnv();

export const metadata: Metadata = {
  title: "Closed Tenders | Aspire",
  description:
    "Explore the latest Closed tenders available for bids on our website. Find the best opportunities for your business and submit your proposals to secure contracts",
  keywords:
    "Closed tenders, bidding, procurement, aspire, tenders, business, opportunities, contracts, proposals, bids, request for quotes",
  openGraph: {
    title: "Closed Tenders | Aspire",
    description:
      "Explore the latest Closed tenders available for bids on our website. Find the best opportunities for your business and submit your proposals to secure contracts",
    url: "https://aspire.co.za/procurement/closed-tenders",
    type: "website",
    images: ["https://aspire.co.za/images/public-works.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Closed Tenders | Aspire",
    description:
      "Explore the latest Closed tenders available for bids on our website. Find the best opportunities for your business and submit your proposals to secure contracts",
  },
};

export const revalidate = 60;

const page = async () => {
  const tendersData = getClosedBids();

  const [tenders] = await Promise.all([tendersData]);

  const views =
			(await redis.get<number>(
				["pageviews", "projects", "awarded"].join(":"),
			)) ?? 0;

  return (
			<Container>
				<ReportView slug="closed-tenders" />
				<ViewsBadge views={views} />
				<TendersTable tenders={tenders} />
			</Container>
		);
};
export default page;
