import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { BookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AspireContent = () => {
  return (
    <Container>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <div className="w-full leading-7">
          <h2 className="text-3xl font-semibold text-aspire">
            She is ASPIRE
          </h2>
          <p className="mt-4 text-base font-medium md:text-md lg:text-lg text-neutral-600">
            Radiant by nature, with a countenance of confidence, she is a
            catalyst for growth – she sets dampness alight and stir the later
            energy into vibrancy.
          </p>
          <p className="mt-4 text-base font-medium md:text-md lg:text-lg text-neutral-600">
            A vibrant pedagog, she draw her people out of themselves, calling
            them to witness with and partake in something that they scarcely
            believed possible. She is an influential, wise player who knows her
            role in the task, and understands, defines and complements the roles
            of the others. They look to her for trustworthy counsel; her
            confidence of identity and function fuels her leadership and
            inspiration.
          </p>
          <p className="mt-4 text-base font-medium md:text-md lg:text-lg text-neutral-600">
            <strong>Highly skilled and innovative</strong>, she seeks strategic
            solutions to the real issues that lie before her, she pioneers
            journey for discovery and development alike and she sees
            continuously from the vantage point of hope and optimism.
          </p>

          <div className="mt-2">
            <Link href="/about/about-us">
              <Button type="button" className="">
                Read More
                <BookIcon className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/images/woman.jpg"
            width={1280}
            height={956}
            alt="Woman"
            className="object-cover rounded-lg aspect-video"
          />
        </div>
      </div>
    </Container>
  );
};
export default AspireContent;
