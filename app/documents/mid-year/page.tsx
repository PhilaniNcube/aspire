import Container from "@/components/ui/Container";
import { getMidYearDocs } from "@/sanity/sanity-utils";
import DocumentsTable from "../DocumentsTable";
import DocumentBreadCrumbs from "../document-breadcrumbs";

const MidYearReports = async () => {

  const docs = await getMidYearDocs()

  return (
			<Container>
				{" "}
				<h1 className="text-3xl font-semibold text-primary">
					Mid Year Reports
				</h1>
				<DocumentBreadCrumbs currentPage="Mid Year Reports" />
				<DocumentsTable documents={docs} />
			</Container>
		);
};
export default MidYearReports;
