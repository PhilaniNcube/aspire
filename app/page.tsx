import Container from '@/components/ui/Container'
import Hero from './Hero'
import Focus from './Focus'
import AspireContent from './AspireContent'
import Mission from './Mission'
import {  getMainArticles, getProjects, getProjectsIDs } from '@/sanity/sanity-utils'
import ProjectsSection from './ProjectsSection'
import type { Metadata } from "next";
import Carousel from './Carousel'

export const metadata: Metadata = {
  title: "Aspire",
  description:
    "Stay up to date with the latest news coming out of Amathole District and the Amathole Development Agency - Aspire",
  keywords:
    "open tenders, bidding, procurement, aspire, tenders, business, opportunities, contracts, proposals, bids, request for quotes",
  openGraph: {
    title: "Aspire",
    description:
      "Stay up to date with the latest news coming out of Amathole District and the Amathole Development Agency - Aspire",
    url: "https://aspire.org.za/news",
    type: "website",
    images: ["https://aspire.org.za/images/public-works.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspire",
    description:
      "Stay up to date with the latest news coming out of Amathole District and the Amathole Development Agency - Aspire",
  },
};

export default async function Home() {

  const projectsData = getProjects()
  // const articlesData = getMainArticles()

  const [projects] = await Promise.all([projectsData]);

  return (
    <main className="">
      <Hero />
      {/* <Carousel articles={articles} /> */}
      <Focus />
      <AspireContent />
      <Mission />
      <ProjectsSection projects={projects} />
    </main>
  )
}
