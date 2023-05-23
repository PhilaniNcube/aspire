import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import Image from "next/image";

const Hero = () => {
  return <Container>
    <div className="relative w-full">
      <Image src="/images/buffalo-city.jpg" width={2560} height={1432} alt="Hero" className="object-cover h-[50vh]" />
      <div className="absolute inset-0 flex items-center justify-center text-center bg-slate-300/30">
        <TypographyH1>About Us</TypographyH1>
      </div>
    </div>
  </Container>;
};
export default Hero;
