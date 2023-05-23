import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Project } from "@/schema";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projects: Project[];
}

const ProjectsSection = ({projects}:Props) => {
  return (
    <Container>
      <article className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2">
        <div>
          <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                key={project._id}
                href={`/projects/${project.slug?.current}`}
                className="overflow-hidden border rounded-lg cursor-pointer group border-neutral-200 group-hover:shadow-md"
              >
                {project?.images ? (
                  <Image
                    src={project.images[0]}
                    width={1920}
                    height={1080}
                    alt={project.name!}
                    className="object-cover w-full aspect-video"
                  />
                ) : (
                  <Image
                    src="/images/public-works.jpg"
                    width={1920}
                    height={1080}
                    alt={project.name!}
                    className="object-cover w-full aspect-video"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-md text-neutral-900 group-hover:text-aspire">
                    {project.name}
                  </h3>

                  <Link href={`/projects/${project.slug?.current}`}>
                    <Button
                      type="button"
                      variant="outline"
                      className="hover:bg-yellow-200"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-aspire md:text-4xl lg:text-5xl">
            Explore our Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Since its formation as a development arm of Amathole District
            Municipality, ASPIRE Development Agency has initiated infrastructure
            investment projects worth over R100 million. These project encompass
            development initiatives in the arts and craft sector, boosting
            township economy and city planning.
          </p>{" "}
          <Image
            src="/images/public-works.jpg"
            width={1920}
            height={1080}
            alt="Projects"
            className="object-cover w-full rounded-lg"
          />{" "}
        </div>
      </article>
    </Container>
  );
};
export default ProjectsSection;
