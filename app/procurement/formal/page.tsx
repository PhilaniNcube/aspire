import Container from "@/components/ui/Container";
import { getAwardedBids, getClosedBids, getOpenBids } from "@/sanity/sanity-utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TendersTable from "../TendersTable";
import { ReportView } from "../awarded/view";
import { Redis } from "@upstash/redis";
import ViewsBadge from "@/components/views-badge";

const redis = Redis.fromEnv();

const FormalTendersPage = async () => {


  const openBidsData = getOpenBids();
  const closedBidsData = getClosedBids();
  const awardedBidsData = getAwardedBids();

  const [openBids, closedBids, awardedBids] = await Promise.all([openBidsData, closedBidsData, awardedBidsData]);

  console.log(openBids);

    const views =
					(await redis.get<number>(
						["pageviews", "projects", "awarded"].join(":"),
					)) ?? 0;

  return (
			<Container>
				<ReportView slug="formal" />
				<ViewsBadge views={views} />
				<h1 className="mb-4 text-2xl font-bold text-gray-800">
					Formal Tenders
				</h1>
				<Tabs defaultValue="adverts" className="w-full">
					<TabsList>
						<TabsTrigger value="adverts">Adverts</TabsTrigger>
						<TabsTrigger value="closingRegister">Closing Register</TabsTrigger>
						<TabsTrigger value="awardRegister">Award Register</TabsTrigger>
					</TabsList>
					<TabsContent value="adverts">
						<TendersTable tenders={openBids} />
					</TabsContent>
					<TabsContent value="closingRegister">
						<TendersTable tenders={closedBids} />
					</TabsContent>
					<TabsContent value="awardRegister">
						<TendersTable tenders={awardedBids} />
					</TabsContent>
				</Tabs>
			</Container>
		);
};
export default FormalTendersPage;
