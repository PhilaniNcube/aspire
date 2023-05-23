import Container from '@/components/ui/Container'
import Hero from './Hero'
import Focus from './Focus'
import AspireContent from './AspireContent'
import Mission from './Mission'
import {  getProjects, getProjectsIDs } from '@/sanity/sanity-utils'
import ProjectsSection from './ProjectsSection'

export default async function Home() {

  const projectsData = getProjects()

  const [projects] = await Promise.all([projectsData])

  return (
    <main className="">
      <Hero />
      <Focus />
      <AspireContent />
      <Mission />
      <ProjectsSection projects={projects} />
    </main>
  )
}
