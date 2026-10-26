import Image from "next/image";
import { format, parseISO } from "date-fns";
import { TypographyH1 } from "@/components/typography";
import Container from "@/components/ui/Container";
import { getInvestments, getInvestmentsPage } from "@/sanity/sanity-utils";

export const revalidate = 60;

const Investments = async () => {
  const [page, investments] = await Promise.all([
    getInvestmentsPage(),
    getInvestments(),
  ]);

  return (
    <main>
      <Container>
        <TypographyH1>{page?.heading ?? "Investments"}</TypographyH1>
        {page?.intro ? (
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            {page.intro}
          </p>
        ) : null}
        {investments.length === 0 ? (
          <p className="mt-8 text-muted-foreground">
            No investment opportunities have been published yet.
          </p>
        ) : (
          <div className="mt-8 grid gap-6">
            {investments.map((investment) => (
              <a
                key={investment._id}
                href={investment.document}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-lg border bg-background transition-shadow hover:shadow-lg sm:flex-row"
              >
                <div className="relative aspect-[3/4] w-full shrink-0 bg-muted sm:aspect-auto sm:w-44 lg:w-52">
                  {investment.image ? (
                    <Image
                      src={investment.image}
                      alt={
                        investment.imageAlt ??
                        investment.title ??
                        "Investment opportunity cover"
                      }
                      fill
                      sizes="(min-width: 640px) 208px, 100vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full min-h-40 items-center justify-center p-4 text-center text-sm font-medium">
                      {investment.title}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {investment.sector ? <span>{investment.sector}</span> : null}
                    {investment.publishedAt ? (
                      <time dateTime={investment.publishedAt}>
                        {format(parseISO(investment.publishedAt), "d MMMM yyyy")}
                      </time>
                    ) : null}
                  </div>
                  <h2 className="mt-2 text-xl font-semibold md:text-2xl">
                    {investment.title}
                  </h2>
                  {investment.summary ? (
                    <p className="mt-2 text-muted-foreground">
                      {investment.summary}
                    </p>
                  ) : null}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium group-hover:underline">
                    View investment document
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
};

export default Investments;
