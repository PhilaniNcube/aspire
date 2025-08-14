"use client"

import { Doc, type Tender } from "@/schema";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { DownloadCloudIcon, PaperclipIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import formatter from "@/utils/formatCurrency";
import type { MouseEvent } from "react";

type Props = {
  tenders: Tender[];
};

const TendersTable = ({ tenders }: Props) => {

  const router = useRouter();

  return (
			<Table>
				<TableCaption> A list of Aspire Documents</TableCaption>
				<TableHeader>
					<TableRow className="text-lg font-semibold">
						<TableHead>Tender Number</TableHead>
						<TableHead>Document Name</TableHead>
						<TableHead>Tender Docs Price</TableHead>
						<TableHead>Closing Date</TableHead>
						<TableHead>Awarded</TableHead>
						<TableHead>Download Documents</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{tenders.map((tender, index) => (
						<TableRow
							key={tender._id}
							onClick={() =>
								router.push(`/procurement/${tender.slug?.current}`)
							}
						>
							<TableCell>{tender.tenderNumber}</TableCell>
							<TableCell>{tender.name}</TableCell>
							{/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
							<TableCell>{formatter(tender.price!)}</TableCell>
							<TableCell>{tender.closingDate}</TableCell>
							<TableCell>
								{tender.awarded ? "Awarded" : "Not Awarded"}
							</TableCell>
						<TableCell className="flex gap-2">
							{/* Show Tender Document if available */}
							{tender.tenderDocument && (
								<Link
									href={tender.tenderDocument}
									className="flex items-center gap-1 hover:text-blue-600"
									onClick={e => e.stopPropagation()}
									title="Download Tender Document"
								>
									<DownloadCloudIcon size={20} />
									<span className="text-xs">Tender</span>
								</Link>
							)}
							{/* Show Closing Register if available */}
							{tender.closeOutDocument && (
								<Link
									href={tender.closeOutDocument}
									className="flex items-center gap-1 hover:text-green-600"
									onClick={e => e.stopPropagation()}
									title="Download Closing Register"
								>
									<PaperclipIcon size={18} />
									<span className="text-xs">Register</span>
								</Link>
							)}
						</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
};
export default TendersTable;
