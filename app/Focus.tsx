import { TypographyH3 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { AwardIcon, Building2Icon, GraduationCapIcon } from "lucide-react";

const details = [
  {
    title: "2 Awards Won",
    icon: <AwardIcon size={64} strokeWidth={1} className="text-white" />,
  },
  {
    title: "27 Complete Economic Studies",
    icon: (
      <GraduationCapIcon size={64} strokeWidth={1} className="text-white" />
    ),
  },
  {
    title: "14 Mega Projects",
    icon: <Building2Icon size={64} strokeWidth={1} className="text-white" />,
  },
];

const Focus = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 my-10 rounded-lg bg-aspire lg:grid-cols-3">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 space-x-4 aspect-[4/2]"
          >
            {detail.icon}
            <h3 className="mt-3 text-2xl font-semibold tracking-wider text-white" >
              {detail.title}
            </h3>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default Focus;
