import Container from "@/components/ui/Container";
import { EyeIcon, FileAxis3d, TargetIcon } from "lucide-react";

const items = [
  {
    title: "Our Vision",
    description:
      "The vision of the Amathole District Municipality is to become a leading, dynamic, innovative, pioneering and focused district municipality dedicated to servicing the needs of its communities and their social and economic development.",
    icon: <EyeIcon strokeWidth={1} size={64} />,
  },
  {
    title: "Our Mission",
    description:
      "Contributing to the betterment of its communities’ lives through a participatory development process to ensure that they have access to socio-economic opportunities.",
    icon: <TargetIcon strokeWidth={1} size={64} />,
  },
  {
    title: "Our Mandate",
    description:
      "Is the promotion and implementation of development policies in areas of economic production and investment in the Amathole Region. A 20-year economic development strategy, Khul’ Amathole 2025",
    icon: <FileAxis3d strokeWidth={1} size={64} />,
  },
];

const Grid = () => {
  return <section className="py-10">
    <Container>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <div key={index} className="w-full p-8">
            <div className="flex justify-center text-aspire">
              {item.icon}
            </div>
            <h3 className="mt-4 text-2xl font-bold text-center text-slate-900">{item.title}</h3>
            <p className="mt-4 text-lg text-center text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>;
};
export default Grid;
