import Container from "@/components/ui/Container";
import DocumentsTable from "../DocumentsTable";
import { getMonthlyDocs } from "@/sanity/sanity-utils";
import DocumentBreadCrumbs from "../document-breadcrumbs";

const MonthlyReports = async () => {

  const docs = await getMonthlyDocs();

  return (
			<Container>
				{" "}
				<h1 className="text-3xl font-semibold text-primary">Monthly Reports</h1>
				<DocumentBreadCrumbs currentPage="Monthly Reports" />
				<DocumentsTable documents={docs} />
			</Container>
		);
};
export default MonthlyReports;
