import Container from "@/components/ui/Container";
import { getTenders } from "@/sanity/sanity-utils";
import TendersTable from "./TendersTable";

const page = async () => {

  const tendersData = getTenders()

  const [tenders] = await Promise.all([tendersData]);

  return <Container>
    <TendersTable tenders={tenders} />
  </Container>;
};
export default page;
