import Container from "@/components/ui/Container";
import ObjectivesHero from "./_components/objectives-hero";
import ObjectivesGrid from "./_components/objectives-grid";
import Articles from "./_components/articles";

const page = () => {
  return <Container>
    <ObjectivesHero />
    <ObjectivesGrid />
    <Articles />
  </Container>;
};
export default page;
