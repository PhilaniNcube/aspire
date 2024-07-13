import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

const ViewsBadge = ({views}:{views:number}) => {
  return (
			<Badge variant="outline" className="absolute top-3 right-2 flex gap-x-3">
				Page veiws
				<span>{views}</span>
			</Badge>
		);
};
export default ViewsBadge;
