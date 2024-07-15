import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";



const page = async () => {

  const projectsData = getProjects()

  const [projects] = await Promise.all([projectsData]);

  return (
    <main>
      <Container>
        <TypographyH1>Projects</TypographyH1>
        <section className="grid w-full grid-cols-1 gap-6 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug?.current}`}
              key={project._id}
              className="overflow-hidden bg-white rounded-md cursor-pointer"
            >
              {project.images && project.images.length > 0 ? (
                <Image
                  src={project?.images[0]}
                  alt="project"
                  width={600}
                  height={400}
                  className="w-full aspect-video"
                />
              ) : (
                <Image
                  src="/images/public-works.jpg"
                  width={600}
                  height={400}
                  alt="project"
                  className="w-full aspect-video"
                />
              )}
              <div className="mt-4">
                <h3 className="font-semibold text-md text-neutral-900">
                  {project.name}
                </h3>
              </div>
            </Link>
          ))}
        </section>
      </Container>
    </main>
  );
};
export default page;
