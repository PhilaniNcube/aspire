/* eslint-disable @next/next/no-img-element */
import Container from "@/components/ui/Container";
import { MailIcon, PhoneCallIcon, PinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

const day = new Date().getFullYear();


  return (
    <footer className="mt-6 bg-slate-800">
      <Container>
        <div className="flex flex-col gap-6 py-10 lg:items-start lg:flex-row ">
          <div className="flex flex-col justify-start w-full lg:w-1/4">
            <img
              src="/images/logo.png"
              className="object-cover w-full md:w-1/3"
              alt="Logo"
            />
            <p className="mt-3 text-sm text-white">
              Contributing to the betterment of its communities’ lives through a
              participatory development process to ensure that they have access
              to socio-economic opportunities.
            </p>

            {/* <div className="mt-7">
              <Link href="https://sacoronavirus.co.za">
                <p className="text-lg font-medium text-teal-600">
                  Government Covid-19 Portal
                </p>
                <Image
                  src="/images/covid-.png"
                  width={350}
                  height={100}
                  className="object-cover w-full mt-2 md:w-2/3"
                  alt="Logo"
                />
              </Link>
            </div> */}
          </div>

          <div className="flex flex-col justify-start w-full lg:w-1/4">
            <h3 className="text-2xl font-semibold text-white">Contact Us</h3>
            <div className="mt-4">
              <div className="flex space-x-2">
                <PinIcon strokeWidth={1} size={32} className="text-white" />
                <p className="font-medium text-white text-md">
                  3-33 Phillip Frame Road, Chiselhurrst, East London, 5201
                </p>
              </div>
              <div className="flex space-x-2">
                <PhoneCallIcon
                  strokeWidth={1}
                  size={32}
                  className="text-white"
                />
                <p className="font-medium text-white text-md">043 721 2070</p>
              </div>
              <div className="flex space-x-2">
                <MailIcon strokeWidth={1} size={32} className="text-white" />
                <p className="font-medium text-white text-md">
                  info@aspire.org.za
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start w-full lg:w-1/4">
            <h3 className="text-2xl font-semibold text-white">Menu</h3>
            <div className="flex flex-col mt-3 space-y-3">
              <Link href="/" className="text-lg font-medium text-white">
                Home
              </Link>
              <Link
                href="/about/about-us"
                className="text-lg font-medium text-white"
              >
                About Us
              </Link>
              <Link
                href="/documents"
                className="text-lg font-medium text-white"
              >
                Documents
              </Link>
              <Link
                href="/procurement"
                className="text-lg font-medium text-white"
              >
                Procurement
              </Link>
              <Link
                href="/vacancies"
                className="text-lg font-medium text-white"
              >
                Vacancies
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-start w-full lg:w-1/4">
            <h3 className="text-2xl font-semibold text-white">Latest News</h3>
            <div className="flex flex-col mt-3 space-y-3">
              <Link href="/news" className="text-lg font-medium text-white">
                News
              </Link>
              <Link href="/projects" className="text-lg font-medium text-white">
                Projects
              </Link>

            </div>
          </div>
        </div>
        <p className="text-sm text-white">
          &copy;{" "}{day} developed by{" "}
          <Link href="https://athenamedia.co.za" className="italic hover:underline">Athena Media</Link>
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
