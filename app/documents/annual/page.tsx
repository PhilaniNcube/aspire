import Container from "@/components/ui/Container";
import { getAnnualDocs } from "@/sanity/sanity-utils";
import DocumentsTable from "../DocumentsTable";
import DocumentBreadCrumbs from "../document-breadcrumbs";

const AnnualReports = async () => {

  const docs = await getAnnualDocs()

	return (
		<Container>
			<h1 className="text-3xl font-semibold text-primary">Annual Reports</h1>
			<DocumentBreadCrumbs currentPage="Annual Reports" />
			<DocumentsTable documents={docs} />
		</Container>
	);
};
export default AnnualReports;
