/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2NqXLCxOVE9
 */
import { Button } from "@/components/ui/button";

export default function ObjectivesHero() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Strategic Objectives
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              ASPIRE has adopted strategic objectives aligned to the development
              pillars and key drivers for change within the district. ASPIRE’s
              organisational structure facilitates the delivery of the Strategic
              Objectives, in alignment to the Development Pillars, to ensure
              efficient, effective, and economical responses to the drivers of
              change within the district.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
