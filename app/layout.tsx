import { getDocs, getProjectsIDs } from '@/sanity/sanity-utils'
import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
        import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from 'next';


export const metadata:Metadata = {
  metadataBase: new URL('https://aspire.org.za'),
	title: "ASPIRE",
	description: "Amathole Beyond Limits",
  // googleSiteVerification: "p_yCQ0WfXE2Ck-U7CCrWpVkBJemUM2zRIT2AxyswzdQ",
  keywords: "ASPIRE, Amathole, Beyond Limits, Development, Projects, Tenders, News, Documents",
  robots: "index, follow",
  openGraph: {
    title: "ASPIRE",
    description: "Amathole Beyond Limits",
    url: "https://aspire.org.za",
    type: "website",
    images: [
      {
        url: "/public/images/logo.png",
        width: 800,
        height: 600,
        alt: "ASPIRE Logo",
      },
    ],
  },

  verification: {
    google: "p_yCQ0WfXE2Ck-U7CCrWpVkBJemUM2zRIT2AxyswzdQ",
  },
  icons: [
    {
      url: "/public/images/logo.png",
    }
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

const projectsData = getProjectsIDs();
const docsData = getDocs();

const [projects, docs] = await Promise.all([projectsData, docsData]);

  return (
			<html lang="en">
				<body>
					<Navbar />
					{children}
					<Footer />
					<Toaster />
				</body>
			</html>
		);
}
