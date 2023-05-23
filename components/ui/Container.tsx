"use client"

import { ReactNode } from "react";

const Container = ({children}:{children:ReactNode}) => {
  return <div className="px-6 py-4 mx-auto max-w-[2520px] md:px-4 lg:px-10 bg-transparent">{children}</div>;
};
export default Container;

