/* eslint-disable @next/next/no-img-element */
"use client"

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Project } from '@/schema';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const about = [
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Governance Structures",
    href: "/governance-structures",
  },
  {
    title: "Management",
    href: "/management",
  },
  {
    title: "Our Objectives",
    href: "/our-objectives",
  },
];

type Props = {
  projects: Project[];
}

const MobileNav = () => {

  const router = useRouter()

  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full lg:hidden">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo-white.webp"
            width={2480}
            height={949}
            className="object-cover w-24"
            alt="Logo"
          />
        </Link>
      </div>
      <Sheet open={open}>
        <SheetTrigger asChild>
          <MenuIcon size={24} onClick={() => setOpen(!open)} />
        </SheetTrigger>
        <SheetContent position="right" size="xl" onClick={() => setOpen(false)}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col w-full space-y-3">
            <Link
              href="/about/about-us"
              className="text-sm font-medium text-slate-700"
            >
              About Us
            </Link>
            {/* <Link
              href="/about/governance-structures"
              className="text-sm font-medium text-slate-700"
            >
              Governance Structures
            </Link>
            <Link
              href="/about/management"
              className="text-sm font-medium text-slate-700"
            >
              Management
            </Link> */}
            <Link
              href="/documents"
              className="text-sm font-medium text-slate-700"
            >
              Finance
            </Link>
            <Link
              href="/procurement"
              className="text-sm font-medium text-slate-700"
            >
              Procurement
            </Link>
            <Link
              href="/procurement/closed-tenders"
              className="text-sm font-medium text-slate-700"
            >
              Closed Tenders
            </Link>
            <Link
              href="/vacancies"
              className="text-sm font-medium text-slate-700"
            >
              Vacancies
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-slate-700"
            >
              Projects
            </Link>
            <Link href="/board" className="text-sm font-medium text-slate-700">
              Board Of Directors
            </Link>
            <Link
              href="/investments"
              className="text-sm font-medium text-slate-700"
            >
              Investments
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav
