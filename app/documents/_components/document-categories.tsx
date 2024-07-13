/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cFNT00hjyfB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, WalletIcon } from "lucide-react";
import Link from "next/link";

export default function DocumentCategories() {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
			<Card>
				<CardContent className="flex flex-col gap-4 p-6">
					<div className="flex items-center gap-4">
						<WalletIcon className="w-8 h-8 text-primary" />
						<h3 className="text-xl font-semibold">Budget & Policies</h3>
					</div>
					<p className="text-muted-foreground">
						All documents and reports related to the budget planning as well as municipal policies.
					</p>
					<Link href="/documents/budget-and-policies">
						<Button variant="outline">View Documents</Button>
					</Link>
				</CardContent>
			</Card>
			<Card>
				<CardContent className="flex flex-col gap-4 p-6">
					<div className="flex items-center gap-4">
						<WalletIcon className="w-8 h-8 text-primary" />
						<h3 className="text-xl font-semibold">Annual Reports</h3>
					</div>
					<p className="text-muted-foreground">
						All documents and reports related to the annual reports and related municipal business.
					</p>
					<Link href="/documents/annual">
						<Button variant="outline">View Documents</Button>
					</Link>
				</CardContent>
			</Card>
			<Card>
				<CardContent className="flex flex-col gap-4 p-6">
					<div className="flex items-center gap-4">
						<CalendarIcon className="w-8 h-8 text-primary" />
						<h3 className="text-xl font-semibold">Mid-Year Reports</h3>
					</div>
					<p className="text-muted-foreground">
						Comprehensive reports on the performance and progress at the
						mid-year mark.
					</p>{" "}
					<Link href="/documents/mid-year">
						<Button variant="outline">View Documents</Button>
					</Link>
				</CardContent>
			</Card>
			<Card>
				<CardContent className="flex flex-col gap-4 p-6">
					<div className="flex items-center gap-4">
						<CalendarIcon className="w-8 h-8 text-primary" />
						<h3 className="text-xl font-semibold">Quarterly Reports</h3>
					</div>
					<p className="text-muted-foreground">
						Detailed reports on the performance and progress throughout the
						year, updated quarterly.
					</p>{" "}
					<Link href="/documents/quarterly">
						<Button variant="outline">View Documents</Button>
					</Link>
				</CardContent>
			</Card>
			<Card>
				<CardContent className="flex flex-col gap-4 p-6">
					<div className="flex items-center gap-4">
						<CalendarIcon className="w-8 h-8 text-primary" />
						<h3 className="text-xl font-semibold">Monthly Reports</h3>
					</div>
					<p className="text-muted-foreground">
						Regular updates on the performance and progress, delivered on a
						monthly basis.
					</p>{" "}
					<Link href="/documents/monthly">
						<Button variant="outline">View Documents</Button>
					</Link>
				</CardContent>
			</Card>
		</section>
	);
}

