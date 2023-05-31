"use client"

import { Button } from "@/components/ui/button";
import { News } from "@/schema";
import { ArrowBigLeftDashIcon, ArrowBigRightDashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

const Carousel = ({articles}: {articles: News[]}) => {
// set state for the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(1);

  const max = articles.length

  const nextSlide = useCallback(() => {

    if (currentSlide === max - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }

    }, [currentSlide, max]);

    const prevSlide = useCallback(() => {

    if (currentSlide === 0) {
      setCurrentSlide(max - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide, max])




  useEffect(() => {
    //function to step through the slides on a 1 sec time interval
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  },[nextSlide]);

  return (
    <MotionConfig transition={{ duration: 0.6 }}>
      <div className="w-full text-white">
        {/* <div className="flex justify-between">
        <Button type="button" onClick={prevSlide}>
          <ArrowBigLeftDashIcon />
        </Button>
        <Button type="button" onClick={nextSlide}>
          <ArrowBigRightDashIcon />
        </Button>
      </div> */}
        <AnimatePresence>
          <div
            // key={currentSlide}
            // initial={{ opacity: 0.6 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0.4 }}
            className="w-full bg-blue-500 flex justify-center items-center overflow-hidden relative isolate"
          >
            <div className="relative w-full ">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.4 }}
                className="relative w-full aspect-[7/3]"
              >
                <Image
                  src={articles[currentSlide].image!}
                  alt={articles[currentSlide].name!}
                  width={1920}
                  height={1080}
                  className="w-full  aspect-[7/3] object-cover object-top"
                />
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.4 }}
                  className="absolute inset-0 w-full h-full bg-black/50 flex flex-col space-y-3 items-center justify-center"
                >
                  <h2 className="text-2xl md:text-4xl text-center font-semibold">
                    {articles[currentSlide].name!}
                  </h2>
                  <Link href={`/news/${articles[currentSlide].slug?.current}`}>
                    <Button type="button">Read More</Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};
export default Carousel;
