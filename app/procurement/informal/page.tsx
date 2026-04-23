import Container from "@/components/ui/Container";
import { getAwardedRFQs, getClosedRFQs, getOpenRFQs } from "@/sanity/sanity-utils";
import {
	getAwardedBids,
	getClosedBids,
	getOpenBids,
} from "@/sanity/sanity-utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TendersTable from "../TendersTable";
import ViewsBadge from "@/components/views-badge";

const InformalTendersPage = async () => {
  const openRFQsData = getOpenRFQs();
  const closedRFQsData = getClosedRFQs();
  const awardedRFQsData = getAwardedRFQs();

  const [openRFQs, closedRFQs, awardedRFQs] = await Promise.all([openRFQsData, closedRFQsData, awardedRFQsData]);

  const views = 0;

  return (
			<Container>
				<ViewsBadge views={views} />
				<h1 className="mb-4 text-2xl font-bold text-gray-800">
					Informal Tenders
				</h1>
				<Tabs defaultValue="adverts" className="w-full">
					<TabsList>
						<TabsTrigger value="adverts">Adverts</TabsTrigger>
						<TabsTrigger value="closingRegister">Closing Register</TabsTrigger>
						<TabsTrigger value="awardRegister">Award Register</TabsTrigger>
					</TabsList>
					<TabsContent value="adverts">
						<TendersTable tenders={openRFQs} />
					</TabsContent>
					<TabsContent value="closingRegister">
						<TendersTable tenders={closedRFQs} />
					</TabsContent>
					<TabsContent value="awardRegister">
						<TendersTable tenders={awardedRFQs} />
					</TabsContent>
				</Tabs>
			</Container>
		);
};
export default InformalTendersPage;
