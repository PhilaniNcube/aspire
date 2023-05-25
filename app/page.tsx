import Container from '@/components/ui/Container'
import Hero from './Hero'
import Focus from './Focus'
import AspireContent from './AspireContent'
import Mission from './Mission'
import {  getProjects, getProjectsIDs } from '@/sanity/sanity-utils'
import ProjectsSection from './ProjectsSection'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News and Blog Articles | Aspire",
  description:
    "Stay up to date with the latest news coming out of Amathole District and the Amathole Development Agency - Aspire",
  keywords:
    "open tenders, bidding, procurement, aspire, tenders, business, opportunities, contracts, proposals, bids, request for quotes",
  openGraph: {
    title: "Latest News and Blog Articles | Aspire",
    description:
      "Stay up to date with the latest news coming out of Amathole District and the Amathole Development Agency - Aspire",
    url: "https://aspire.co.za/news",
    type: "website",
    images: ["https://aspire.co.za/images/public-works.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest News and Blog Articles | Aspire",
    description:
      "Stay up to date with the latest news coming out of Amathole District and the Amathole Development Agency - Aspire",
  },
};

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
