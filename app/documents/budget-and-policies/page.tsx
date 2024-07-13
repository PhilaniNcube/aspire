import Container from "@/components/ui/Container";
import DocumentsTable from "../DocumentsTable";
import { getBudgetDocs } from "@/sanity/sanity-utils";
import DocumentBreadCrumbs from "../document-breadcrumbs";

const BudgetAndPolicyReports = async () => {

  const docs = await getBudgetDocs();

  return (
			<Container>
				<h1 className="text-3xl font-semibold text-primary">
					Budget and Policy Reports
				</h1>
				<DocumentBreadCrumbs currentPage="Budget and Policies Reports" />
				<DocumentsTable documents={docs} />
			</Container>
		);
};
export default BudgetAndPolicyReports;
