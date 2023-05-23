import Container from "@/components/ui/Container";
import Image from "next/image";

const Description = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="w-full">
            <h2 className="text-4xl font-bold tracking-wider text-aspire md:text-6xl">
              About ASPIRE
            </h2>
            <p className="text-md lg:text-lg text-neutral-600">
              ASPIRE was founded as the Amathole Economic Development Agency
              (AEDA), a proprietary limited company, on 1 September 2005. It was
              envisaged ASPIRE would support the parent municipality&apos;s goal
              of local economic growth and assist the Amathole District
              Municipality with the implementation of local economic development
              initiatives.
            </p>
            <p className="mt-3 text-md lg:text-lg text-neutral-600">
              Over the years, <strong>ASPIRE</strong>&apos;s experience and
              understanding of the Amathole region and its challenges grew. Its
              mandate is: “the promotion and implementation of development
              policies in areas of economic production and investment in the
              Amathole Region”. A 20-year economic development strategy,
              “Khul&apos; Amathole 2025” The vision of the Amathole District
              Municipality is to become a leading, dynamic, innovative,
              pioneering and focused district municipality dedicated to
              servicing the needs of its communities and their social and
              economic development. Its mission includes contributing to the
              betterment of its communities&apos; lives through a participatory
              development process to ensure that they have access to
              socio-economic opportunities.
            </p>
            <p className="mt-3 text-md lg:text-lg text-neutral-600">
              The role of <strong>ASPIRE</strong> is to therefore assist the
              <strong>{" "}Amathole District Municipality</strong> in attaining its
              vision and to support a mission that specifically spells out the
              participatory nature of the development process. The key is the
              building of networks with counterparts by investing upfront in
              relationship building – and this takes time.{" "}
            </p>
            <p className="mt-3 text-md lg:text-lg text-neutral-600">
              <strong>ASPIRE</strong> believes that any subsequent success
              emanates from this investment and from the consistent involvement
              of local municipalities and communities in the development
              process.
            </p>
          </div>
          <Image src="/images/about.jpg" width={683} height={1024} alt="About Aspire" className="object-cover w-full aspect-video lg:aspect-[4/3]" />
        </div>
      </Container>
    </section>
  );
};
export default Description;
