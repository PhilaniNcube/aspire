import Container from "@/components/ui/Container";
import { getOngoingProjects } from "@/sanity/sanity-utils";
import ProjectGrid from "../_components/project-grid";

const OngoingProjects = async () => {

  const projects = await getOngoingProjects();

  return (
			<Container>
				<h1 className="mb-4 text-2xl font-bold text-gray-800">
					Ongoing Projects
				</h1>
        <ProjectGrid projects={projects} />
			</Container>
		);
};
export default OngoingProjects;
