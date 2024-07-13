import type { Doc } from "@/schema";
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
import { format } from "date-fns";

type Props = {
  documents: Doc[]
}

const DocumentsTable = ({documents}:Props) => {


  return (
    <Table>
      <TableCaption> A list of ASPIRE Documents</TableCaption>
      <TableHeader>
        <TableRow className="text-lg font-semibold">
          <TableHead>Document Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Uploaded</TableHead>
          <TableHead>Download Document</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((doc, index) => (
          <TableRow key={doc._id}>
            <TableCell>{doc.title}</TableCell>
            <TableCell>{doc.category}</TableCell>
            <TableCell>{format(new Date(doc._createdAt), 'PPP')}</TableCell>
            <TableCell>
              {" "}
              <Link href={doc.content} className="hover:text-blue-600">
                <DownloadCloudIcon size={24} />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default DocumentsTable;
