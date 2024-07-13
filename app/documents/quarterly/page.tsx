import Container from "@/components/ui/Container";
import DocumentsTable from "../DocumentsTable";
import { getQuarterlyDocs } from "@/sanity/sanity-utils";
import DocumentBreadCrumbs from "../document-breadcrumbs";

const QuartelyReports = async () => {

  const docs = await getQuarterlyDocs();

  return (
			<Container>
				{" "}
				<h1 className="text-3xl font-semibold text-primary">Quarterly Reports</h1>
        <DocumentBreadCrumbs currentPage="Quarterly Reports" />
				<DocumentsTable documents={docs} />
			</Container>
		);
};
export default QuartelyReports;
