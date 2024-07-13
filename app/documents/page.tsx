import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { getDocs } from "@/sanity/sanity-utils";
import DocumentsTable from "./DocumentsTable";
import DocumentCategories from "./_components/document-categories";

const page = async () => {

  const documentsData = getDocs()

  const [docs] = await Promise.all([documentsData]);

  return (
    <Container>
     <DocumentCategories />
    </Container>
  );
};
export default page;
