import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export function TypographyH1({ children }: Props) {
  return (
    <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
      {children}
    </h1>
  );
}


export function TypographyH2({ children }: Props) {
  return (
    <h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0">
      {children}
    </h2>
  );
}


export function TypographyH3({ children }: Props) {
  return (
    <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
      {children}
    </h3>
  );
}


export function TypographyH4({ children }: Props) {
  return (
    <h4 className="text-xl font-semibold tracking-tight scroll-m-20">
      {children}
    </h4>
  );
}
