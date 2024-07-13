import Container from "@/components/ui/Container";
import { getCompletedProjects } from "@/sanity/sanity-utils";
import ProjectGrid from "../_components/project-grid";

const FinalizedProjects = async () => {

  const projects = await getCompletedProjects();

  return (
			<Container>
				<h1 className="mb-4 text-2xl font-bold text-gray-800">
					Completed Projects
				</h1>
				<ProjectGrid projects={projects} />
			</Container>
		);
};
export default FinalizedProjects;
