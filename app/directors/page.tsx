import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import Image from "next/image";

const directors = [
  {
    name: "Mr Luthando Jack",
    potion: "Chairperson of the Board",
    image: "/images/luthando.jpg",
  },
  {
    name: "Adv M Sotenjwa",
    position: "Chairperson of the Social and Ethics Committee",
    image: "/images/sotenjwa.webp",
  },
  {
    name: "Mr S Toni",
    position: "Chairperson of the Projects Committee",
    image: "/images/toni.webp",
  },
  {
    name: "Ms N Ntshanga",
    position: "Chairperson of the Finance Committee",
    image: "/images/ntshanga.webp",
  },
  {
    name: "Ms T Wana",
    position: "Board Member",
    image: "/images/wana.webp",
  },
  {
    name: "Mr B Ondala",
    position: "Board Member",
    image: "/images/ondala.webp",
  },
];

const page = () => {
  return <Container>
    <TypographyH1>Board Of Directors</TypographyH1>
    <div className="grid w-full grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
      {directors.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-4 space-y-2 bg-white rounded-lg">
          <div className="flex items-center">
          <Image width={3840} height={5760} src={item.image} alt={item.name} className="object-cover w-full h-56 rounded-full" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-lg font-semibold text-center">{item.name}</div>
            <div className="text-sm text-center">{item.position}</div>
          </div>
        </div>
      ))}
    </div>
  </Container>;
};
export default page;
