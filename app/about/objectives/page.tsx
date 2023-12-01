import Container from "@/components/ui/Container";
import ObjectivesHero from "./_components/objectives-hero";
import ObjectivesGrid from "./_components/objectives-grid";

const page = () => {
  return <Container>
    <ObjectivesHero />
    <ObjectivesGrid />
  </Container>;
};
export default page;
