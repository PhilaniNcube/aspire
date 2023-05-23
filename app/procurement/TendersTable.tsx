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

type Props = {
  tenders: Tender[];
};

const TendersTable = ({ tenders }: Props) => {

  console.log({tenders})

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
          <TableRow key={index}>
            <TableCell>{tender.tenderNumber}</TableCell>
            <TableCell>{tender.name}</TableCell>
            <TableCell>{tender.price}</TableCell>
            <TableCell>{tender.closingDate}</TableCell>
            <TableCell>{tender.awarded ? "Awarded" : "Not Awarded"}</TableCell>
            <TableCell>
              {" "}
              <Link href={tender.tenderDocument!} className="hover:text-blue-600">
                <DownloadCloudIcon size={24} />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default TendersTable;
