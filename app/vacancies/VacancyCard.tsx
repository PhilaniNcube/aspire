import type { Vacancy } from "@/schema";
import { BellRing, Calendar, Check, LucideDownload } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

type Props = {
  vacancy: Vacancy;
};

const VacancyCard = ({vacancy}:Props) => {


  return (
			<Card className="w-full">
				<CardHeader className="flex justify-between">
					<CardTitle className="text-2xl font-semibold">
						{vacancy.title}
					</CardTitle>
					<CardDescription>{vacancy.description}</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<div className="">
						<p className="flex space-x-4">
							<Calendar size={24} className="" />
							<span>Closing Date: {vacancy.closingDate}</span>
						</p>
					</div>
					<Separator className="my-4" />
					{vacancy.images !== null && vacancy.images !== undefined ? (
            <Link href={vacancy.images[0]}>

							<Image
								src={vacancy.images[0]}
                layout="responsive"
                width={600}
                height={600}
								alt={vacancy.title || "Image"}
								className="w-[200px] object-cover"
							/>
						</Link>
					) : null}
					<Link href={vacancy.vacancyDocument ? vacancy.vacancyDocument : "#"}>
						<Button type="button" className="flex items-center space-x-2">
							{" "}
							<LucideDownload />{" "}
							<span className="texl-lg">Download Document</span>{" "}
						</Button>
					</Link>
				</CardContent>
			</Card>
		);
};
export default VacancyCard;
