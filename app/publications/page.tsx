/* eslint-disable @next/next/no-img-element */


import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import Link from "next/link";



const Documemts = () => {




  return (
    <main>
      <Container>
        <TypographyH1>Publications</TypographyH1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-12 mt-4">
          {" "}
          <Link href="/documents/dec-2023.pdf" className="cursor-pointer">
            <img
              src="/images/dec-2023.webp"
              alt="Newsflash"
              className="w-full object-cover rounded"
            />
          </Link>
          <Link href="/documents/newsflash.pdf" className="cursor-pointer">
            <img
              src="/images/newsflash.png"
              alt="Newsflash"
              className="w-full object-cover rounded"
            />
          </Link>
        </div>
      </Container>
    </main>
  );
};
export default Documemts;
