import { Doc } from "@/schema";
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
  documents: Doc[]
}

const DocumentsTable = ({documents}:Props) => {


  return (
    <Table>
      <TableCaption> A list of Aspire Documents</TableCaption>
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
          <TableRow key={index}>
            <TableCell>{doc.title}</TableCell>
            <TableCell>{doc.category}</TableCell>
            <TableCell>{doc._createdAt}</TableCell>
            <TableCell>
              {" "}
              <Link href={doc.content!} className="hover:text-blue-600">
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
