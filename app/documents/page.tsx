import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { getDocs } from "@/sanity/sanity-utils";
import DocumentsTable from "./DocumentsTable";

const page = async () => {

  const documentsData = getDocs()

  const [docs] = await Promise.all([documentsData]);

  return (
    <Container>
      <TypographyH1>Documents</TypographyH1>
      <Separator className="my-4"/>
      <div className="mt-6">
        <DocumentsTable documents={docs} />
      </div>
    </Container>
  );
};
export default page;
