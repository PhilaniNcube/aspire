"use client"

import { Doc, Tender } from "@/schema";
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
          <TableHead>Download Document</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tenders.map((tender, index) => (
          <TableRow
            key={index}
            onClick={() => router.push(`/procurement/${tender.slug?.current}`)}
          >
            <TableCell>{tender.tenderNumber}</TableCell>
            <TableCell>{tender.name}</TableCell>
            <TableCell>{formatter(tender.price!)}</TableCell>
            <TableCell>{tender.closingDate}</TableCell>
            <TableCell>{tender.awarded ? "Awarded" : "Not Awarded"}</TableCell>
            <TableCell>
              {tender.awarded ? (
                <Link
                  href={tender.closeOutDocument!}
                  className="hover:text-blue-600"
                >
                  <DownloadCloudIcon size={24} />
                </Link>
              ) : (
                <Link
                  href={tender.tenderDocument!}
                  className="hover:text-blue-600"
                >
                  <DownloadCloudIcon size={24} />
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
