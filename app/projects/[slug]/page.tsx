import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { getProject, getProjects } from "@/sanity/sanity-utils";
import {PortableText} from '@portabletext/react'
import { CloudSnowIcon, LocateIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  }
}





const page = async ({params: {slug}}:Props) => {

  const project = await getProject(slug);

  return (
    <div>
      <Container>
        <TypographyH1>{project.name}</TypographyH1>

        <div className="grid grid-cols-1 gap-4 mt-6 font-medium leading-7 lg:gap-x-8 text-neutral-700 md:grid-cols-2">
          <div>
            {" "}
            <Separator className="my-4" />
            <p className="flex items-center space-x-3 text-semibold">
              <LocateIcon size={36} className="mr-2" />
              <span className="text-2xl"> {project.location}</span>
            </p>
            <Separator className="my-4" />
            <PortableText value={project.content!} />
          </div>
          <div className={`grid grid-cols-2 gap-4`}>
            {project.images?.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={project.name!}
                width={972}
                height={680}
                className="object-cover w-full h-full rounded-lg aspect-video"
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default page;
