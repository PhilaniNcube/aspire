import { getDocs, getProjectsIDs } from '@/sanity/sanity-utils'
import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
        import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: 'ASPIRE',
  description: 'Amathole Beyond Limits',
}

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
