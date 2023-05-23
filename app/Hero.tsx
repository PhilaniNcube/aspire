import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import Image from "next/image";

const Hero = () => {
  return <div className="relative w-full">
    <Image src="/images/landscape.jpg" width={1280} height={834} alt="Hero Image" className="object-cover w-full h-[55vh]" />
    <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <Container>
       <h1 className="text-4xl font-bold text-center text-white lg:text-5xl">
          Welcome to <br />Aspire Development Agency
       </h1>
      </Container>
    </div>
  </div>;
};
export default Hero;
