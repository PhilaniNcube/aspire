import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { getVacancies } from "@/sanity/sanity-utils";
import VacancyCard from "./VacancyCard";

const page = async () => {

  const vacanciesData = getVacancies()
  const [vacancies] = await Promise.all([vacanciesData]);

  return <Container>
    <TypographyH1>Vacancies</TypographyH1>
    <div className="grid grid-cols-1 mt-4 lg:grid-cols-2 gap-10">
      {vacancies.map((vacancy, index) => (
        <VacancyCard key={vacancy._id} vacancy={vacancy} />
      ))}
    </div>
  </Container>;
};
export default page;
