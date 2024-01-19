import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import Image from "next/image";

const Hero = () => {
  return <div className="relative w-full">
    <Image src="/images/banner.webp" width={1200} height={600} alt="Hero Image" className="object-cover w-full" />
     <h1 className="sr-only ">
          Welcome to <br />Aspire Development Agency
       </h1>
    {/* <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <Container>

      </Container>
    </div> */}
  </div>;
};
export default Hero;
