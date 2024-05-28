import Container from "@/components/ui/Container";
import { getClosedTenders } from "@/sanity/sanity-utils";
import TendersTable from "../TendersTable";
import type { Metadata } from "next";

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
	const tendersData = getClosedTenders();

	const [tenders] = await Promise.all([tendersData]);

	return (
		<Container>
			<TendersTable tenders={tenders} />
		</Container>
	);
};
export default page;
