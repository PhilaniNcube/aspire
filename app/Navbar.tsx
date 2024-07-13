"use client"

import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { getProjectsIDs } from "@/sanity/sanity-utils";
import type { Doc, Project } from "@/schema";
import { AlertTriangleIcon, Building, FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, Twitter, TwitterIcon, YoutubeIcon } from "lucide-react";
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
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/aspiredevelopmentagency",
  },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/aspiredevelopmentagency/",
  },
  {
    icon: <TwitterIcon />,
    href: "https://twitter.com/AspireAmathole?s=03",
  },
  {
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/company/aspire-development-agency/",
  },
  {
    icon: <YoutubeIcon />,
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
								<Link href="/" legacyBehavior passHref className="bg-aspire">
									<NavigationMenuLink
										className={cn(
											"text-slate-700 bg-aspire",
											navigationMenuTriggerStyle(),
										)}
									>
										Home
									</NavigationMenuLink>
								</Link>
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
											<Link
												href="/projects/current"
												legacyBehavior
												passHref
												className="cursor-pointer"
											>
												<NavigationMenuLink
													asChild
													className={navigationMenuTriggerStyle()}
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														Current Projects
													</span>
												</NavigationMenuLink>
											</Link>
										</li>
										<li >
											<Link
												href="/projects/finalized"
												legacyBehavior
												passHref
												className="cursor-pointer"
											>
												<NavigationMenuLink
													asChild
													className={navigationMenuTriggerStyle()}
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														Finalized Projects
													</span>
												</NavigationMenuLink>
											</Link>
										</li>
										<li >
											<Link
												href="/projects/ongoing"
												legacyBehavior
												passHref
												className="cursor-pointer"
											>
												<NavigationMenuLink
													asChild
													className={navigationMenuTriggerStyle()}
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														Ongoing Projects
													</span>
												</NavigationMenuLink>
											</Link>
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
												<Link
													href={`/about/${about.href}`}
													legacyBehavior
													passHref
													className="cursor-pointer"
												>
													<NavigationMenuLink
														asChild
														className={navigationMenuTriggerStyle()}
													>
														<span className="font-medium cursor-pointer text-neutral-700">
															{about.title}
														</span>
													</NavigationMenuLink>
												</Link>
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
											<Link
												href="/procurement/formal"
												legacyBehavior
												passHref
												className="cursor-pointer"
											>
												<NavigationMenuLink
													asChild
													className={navigationMenuTriggerStyle()}
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														Formal Tenders
													</span>
												</NavigationMenuLink>
											</Link>
										</li>
										<li>
											<Link
												href="/procurement/informal"
												legacyBehavior
												passHref
												className="cursor-pointer"
											>
												<NavigationMenuLink
													asChild
													className={navigationMenuTriggerStyle()}
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														Informal Tenders
													</span>
												</NavigationMenuLink>
											</Link>
										</li>
										<li>
											<Link
												href="/procurement/scm"
												legacyBehavior
												passHref
												className="cursor-pointer"
											>
												<NavigationMenuLink
													asChild
													className={navigationMenuTriggerStyle()}
												>
													<span className="font-medium cursor-pointer text-neutral-700">
														SCM Database
													</span>
												</NavigationMenuLink>
											</Link>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/publications" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn(
											"text-slate-700",
											navigationMenuTriggerStyle(),
										)}
									>
										Publications
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/documents" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn(
											"text-slate-700",
											navigationMenuTriggerStyle(),
										)}
									>
										Finance
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<Link href="/vacancies" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn(
											"text-slate-700",
											navigationMenuTriggerStyle(),
										)}
									>
										Vacancies
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/news" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn(
											"text-slate-700",
											navigationMenuTriggerStyle(),
										)}
									>
										News
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/directors" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn(
											"text-slate-700",
											navigationMenuTriggerStyle(),
										)}
									>
										Board Of Directors
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/investments" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn(
											"text-slate-700",
											navigationMenuTriggerStyle(),
										)}
									>
										Investments
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							{/* <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
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
