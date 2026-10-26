import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { getInvestmentsPage } from "@/sanity/sanity-utils";

export const revalidate = 60;

const Investments = async () => {
  const page = await getInvestmentsPage();

  return (
    <Container>
      <TypographyH1>{page?.heading ?? "Investments"}</TypographyH1>
      <div className="min-h-screen">
        {page?.intro ? (
          <h2 className="text-lg font-medium mt-4">{page.intro}</h2>
        ) : null}
      </div>
    </Container>
  );
};

export default Investments;
