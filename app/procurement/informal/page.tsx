import Container from "@/components/ui/Container";
import { getAwardedRFQs, getClosedRFQs, getOpenRFQs } from "@/sanity/sanity-utils";
import {
	getAwardedBids,
	getClosedBids,
	getOpenBids,
} from "@/sanity/sanity-utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TendersTable from "../TendersTable";
import { Redis } from "@upstash/redis";
import ViewsBadge from "@/components/views-badge";
import { ReportView } from "../awarded/view";

const redis = Redis.fromEnv();

const InformalTendersPage = async () => {
  const openRFQsData = getOpenRFQs();
  const closedRFQsData = getClosedRFQs();
  const awardedRFQsData = getAwardedRFQs();

  const [openRFQs, closedRFQs, awardedRFQs] = await Promise.all([openRFQsData, closedRFQsData, awardedRFQsData]);

    const views =
					(await redis.get<number>(
						["pageviews", "projects", "awarded"].join(":"),
					)) ?? 0;

  return (
			<Container>
				<ReportView slug="informal" />
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
