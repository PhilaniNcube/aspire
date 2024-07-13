import Container from "@/components/ui/Container";
import { getCurrentProjects } from "@/sanity/sanity-utils";
import ProjectGrid from "../_components/project-grid";

const CurrentProjects = async () => {

  const projects = await getCurrentProjects();
  console.log(projects);

  return (
			<Container>
				<h1 className="mb-4 text-2xl font-bold text-gray-800">
					Current Projects
				</h1>
				<ProjectGrid projects={projects} />
			</Container>
		);
};
export default CurrentProjects;
