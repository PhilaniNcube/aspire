"use client"

import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { getProjectsIDs } from "@/sanity/sanity-utils";
import type { Doc, Project } from "@/schema";
import { AlertTriangleIcon, Building, MailIcon, PhoneIcon } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";


const socials = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/aspiredevelopmentagency",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/aspiredevelopmentagency/",
  },
  {
    icon: <FaXTwitter />,
    href: "https://twitter.com/AspireAmathole?s=03",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/aspire-development-agency/",
  },
  {
    icon: <FaYoutube />,
    href: "https://www.youtube.com/channel/UCxrilPvzXKol3fD7fIogRjA",
  },
];

const contactDetails = [
  {
    name: "Report Fraud",
    detail: '0800 00 3225',
    icon: <AlertTriangleIcon className="w-6 h-6" />
  },
  {
    name: "Telephone",
    detail: '043 721 2070',
    icon: <PhoneIcon className="w-6 h-6" />
  },
  {
    name: "Email Us",
    detail: 'info@aspire.org.za',
    icon: <MailIcon className="w-6 h-6" />
  },
  {
    name: "Operating Hours",
    detail: 'Mon - Fri 08:00 - 16:30',
    icon: <Building className="w-6 h-6" />
  }
]


const about = [
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Objectives",
    href: "/objectives",
  },
  // {
  //   title: "Management",
  //   href: "/management",
  // },
  // {
  //   title: "Our Objectives",
  //   href: "/our-objectives",
  // }
]

type Props = {
  projects: Project[];
  docs: Doc[]
}


const Navbar =  () => {


  return (
			<header className="bg-aspire">
				<Container>
					<div className="justify-between hidden pb-2 space-x-4 border-b border-black md:flex">
						<div>
							<Link href="/">
								<Image
									src="/images/logo-white.webp"
									width={2480}
									height={949}
									alt="ASPIRE Logo"
									className="object-cover w-36"
								/>
							</Link>
						</div>{" "}
						<div className="flex items-center space-x-2">
							{socials.map((social, index) => (
								<Link
									key={social.href}
									href={social.href}
									className="hover:text-aspire text-slate-800"
								>
									{social.icon}
								</Link>
							))}
						</div>
						<div className="flex items-center space-x-2">
							{contactDetails.map((contact, index) => (
								<div
									key={contact.name}
									className="flex items-center space-x-2 text-slate-800"
								>
									{contact.icon}
									<div>
										<p className="text-sm font-semibold text-slate-700">
											{contact.name}
										</p>
										<p className="text-xs font-medium text-slate-700">
											{contact.detail}
										</p>
									</div>
									<Separator
										orientation="vertical"
										className="h-5 text-black bg-black fill-black"
									/>
								</div>
							))}
						</div>
					</div>

					{/* Desktop Navigation Starts*/}
					<div className="justify-between hidden py-3 space-x-3 md:flex">
						<NavigationMenu className="flex items-center space-x-2 list-none bg-aspire">
							<NavigationMenuItem className="bg-aspire">
								<NavigationMenuLink
									asChild
									className={cn(
										"text-slate-700 bg-aspire",
										navigationMenuTriggerStyle(),
									)}
								>
									<Link href="/" className="bg-aspire">
										Home
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger
									className={cn("text-slate-700", navigationMenuTriggerStyle())}
								>
									Our Projects
								</NavigationMenuTrigger>
								<NavigationMenuContent className="">
									<ul className="grid w-fit gap-3 p-4 md:w-[500px] md:grid-cols-3">
										<li >
											<NavigationMenuLink
												asChild
												className={navigationMenuTriggerStyle()}
											>
												<Link
													href="/projects/current"
													className="cursor-pointer"
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														Current Projects
													</span>
												</Link>
											</NavigationMenuLink>
										</li>
										<li >
											<NavigationMenuLink
												asChild
												className={navigationMenuTriggerStyle()}
											>
												<Link
													href="/projects/finalized"
													className="cursor-pointer"
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														Finalized Projects
													</span>
												</Link>
											</NavigationMenuLink>
										</li>
										<li >
											<NavigationMenuLink
												asChild
												className={navigationMenuTriggerStyle()}
											>
												<Link
													href="/projects/ongoing"
													className="cursor-pointer"
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														Ongoing Projects
													</span>
												</Link>
											</NavigationMenuLink>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger
									className={cn("text-slate-700", navigationMenuTriggerStyle())}
								>
									About Us
								</NavigationMenuTrigger>
								<NavigationMenuContent className="">
									<ul className="grid w-fit gap-3 p-4 md:w-[500px] md:grid-cols-2">
										{about.map((about, index) => (
											<li key={about.title}>
												<NavigationMenuLink
													asChild
													className={navigationMenuTriggerStyle()}
												>
													<Link
														href={`/about/${about.href}`}
														className="cursor-pointer"
													>
														<span className="font-medium cursor-pointer text-neutral-700">
															{about.title}
														</span>
													</Link>
												</NavigationMenuLink>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger
									className={cn("text-slate-700", navigationMenuTriggerStyle())}
								>
									Procurement
								</NavigationMenuTrigger>
								<NavigationMenuContent className="">
									<ul className="grid w-fit gap-3 p-4 md:w-[500px] md:grid-cols-3">
										<li>
											<NavigationMenuLink
												asChild
												className={navigationMenuTriggerStyle()}
											>
												<Link
													href="/procurement/formal"
													className="cursor-pointer"
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														Formal Tenders
													</span>
												</Link>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink
												asChild
												className={navigationMenuTriggerStyle()}
											>
												<Link
													href="/procurement/informal"
													className="cursor-pointer"
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														Informal Tenders
													</span>
												</Link>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink
												asChild
												className={navigationMenuTriggerStyle()}
											>
												<Link
													href="/procurement/scm"
													className="cursor-pointer"
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														SCM Database
													</span>
												</Link>
											</NavigationMenuLink>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={cn(
										"text-slate-700",
										navigationMenuTriggerStyle(),
									)}
								>
									<Link href="/publications">Publications</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={cn(
										"text-slate-700",
										navigationMenuTriggerStyle(),
									)}
								>
									<Link href="/documents">Finance</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={cn(
										"text-slate-700",
										navigationMenuTriggerStyle(),
									)}
								>
									<Link href="/vacancies">Vacancies</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={cn(
										"text-slate-700",
										navigationMenuTriggerStyle(),
									)}
								>
									<Link href="/news">News</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={cn(
										"text-slate-700",
										navigationMenuTriggerStyle(),
									)}
								>
									<Link href="/directors">Board Of Directors</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={cn(
										"text-slate-700",
										navigationMenuTriggerStyle(),
									)}
								>
									<Link href="/investments">Investments</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							{/* <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/contact">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}
						</NavigationMenu>
					</div>
					{/* Desktop Navigation Ends*/}

					{/* Mobile Navigation Starts*/}
					<MobileNav  />
					{/* Mobile Navigation Ends*/}
				</Container>
			</header>
		);
};
export default Navbar;
