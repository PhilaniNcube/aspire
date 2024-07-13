/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4N02cQNuK6T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Project } from "@/schema";
import Image from "next/image";

export default function ProjectGrid({projects}:{projects:Project[]}) {
	return (
		<section className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6">
			{projects.map((project) => (
				<div
					key={project._id}
					className="relative overflow-hidden rounded-lg group"
				>
					<Link href={`/projects/${project?.slug?.current}`} className="absolute inset-0 z-10" prefetch={false}>
						<span className="sr-only">View</span>
					</Link>
					{project.images?.[0] ? (
						<Image
							src={project.images[0]}
							alt="Project 1"
							width={400}
							height={300}
							className="object-cover w-full h-60"
						/>
					) : (
						<Image
							src="/images/placeholder.webp"
							alt="Project 1"
							width={400}
							height={300}
							className="object-cover w-full h-60"
						/>
					)}

					<div className="p-4 bg-background">
						<h3 className="text-lg font-semibold md:text-xl">
							{project.name}
						</h3>
						<p className="text-sm text-muted-foreground">
							{project.location}
						</p>
						<Button size="sm" className="mt-2">
							View Details
						</Button>
					</div>
				</div>
			))}
		</section>
	);
}
