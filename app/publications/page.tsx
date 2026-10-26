import Image from "next/image";
import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { getPublications } from "@/sanity/sanity-utils";

export const revalidate = 60;

const Publications = async () => {
  const publications = await getPublications();

  return (
    <main>
      <Container>
        <TypographyH1>Publications</TypographyH1>
        {publications.length === 0 ? (
          <p className="mt-4 text-muted-foreground">
            No publications have been added yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-12 mt-4">
            {publications.map((publication) => (
              <a
                key={publication._id}
                href={publication.document}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                {publication.image ? (
                  <Image
                    src={publication.image}
                    alt={
                      publication.imageAlt ??
                      publication.title ??
                      "Publication cover"
                    }
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover rounded transition-opacity group-hover:opacity-80"
                  />
                ) : (
                  <div className="flex aspect-[3/4] items-center justify-center rounded bg-muted p-4 text-center font-medium">
                    {publication.title}
                  </div>
                )}
                <span className="sr-only">{publication.title}</span>
              </a>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
};

export default Publications;
