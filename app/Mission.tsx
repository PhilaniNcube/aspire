import Container from "@/components/ui/Container";
import { LucideGroup, LucideHammer, LucideTarget } from "lucide-react";
import Link from "next/link";

const links = [
  {
    title: "Governance",
    href: "/about/governance-structures",
    text: "ASPIRE Board of Directors: 5 members, accountable to ADM Council, with sub-committees including Audit, Social & Ethics, Finance, and Projects.",
    icon: <LucideHammer size={64} className="text-aspire" strokeWidth={1} />,
  },
  {
    title: "Management",
    href: "/about/management",
    text: "ASPIRE celebrates 12 years, focusing on stability, stakeholder connections, and impactful projects in Amathole District.",
    icon: <LucideGroup size={64} className="text-aspire" strokeWidth={1} />,
  },
  {
    title: "Objectives",
    href: "/about/our-objectives",
    text: "Establish ASPIRE as a global leader in SMART rural development, promoting innovative growth, optimizing infrastructure assets, and attracting investments.",
    icon: <LucideTarget size={64} className="text-aspire" strokeWidth={1} />,
  },
];

const Mission = () => {
  return (
    <Container>
      <section className="w-full py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-aspire">Vision</h2>
            <p className="mt-4 text-lg text-gray-500">
              ASPIRE: A prosperous and smart Amathole District
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-aspire">Mission</h2>
            <p className="mt-4 text-lg text-gray-500">
              The catalyst to promote and implement sustainable spatial and
              social economic development in the Amathole District
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link, index) => (
            <div key={index} className="flex items-start w-full gap-2">
              <span>{link.icon}</span>
              <div className="flex-1">
               <h4 className="text-lg font-semibold text-aspire lg:text-2xl">{link.title}</h4>
                <p className="mt-2 text-gray-500 lg:pr-16">{link.text}</p>
                <div className="mt-4">
                 <Link href={link.href} className="px-6 py-2 mt-3 text-white transition-all duration-200 rounded-lg cursor-pointer bg-aspire hover:bg-yellow-700">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
export default Mission;
