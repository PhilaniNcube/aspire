import Container from "@/components/ui/Container";
import Image from "next/image";

const Details = () => {
  return (
    <Container>
      <div className="py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-wide text-gray-800 lg:text-4xl">
              As a local government entity, ASPIRE is committed to good
              governance and compliance. A comprehensive compliance framework
              has been developed and implemented.
            </h2>
          </div>
          <Image
            src="/images/structures.png"
            width={940}
            height={387}
            alt="Structures"
            className="object-cover w-full"
          />
        </div>
        <div className="pr-0 lg:pr-20">
          <p className="mt-4 text-lg text-gray-800">
            The Board of Directors constitutes the accounting authority of
            ASPIRE, reporting and accountable to the ADM Council. The board is
            comprised of five (5) board members appointed by the parent
            municipality for a period of three (3) years. The Amathole District
            Municipality has two representatives on the Board of Directors of
            ASPIRE that attend board meetings. The Chief Executive Officer, as
            the accounting officer is accountable to the Board and is a
            permanent attendee of the Board of Directors meetings.
          </p>
          <p className="mt-4 text-lg text-gray-800">
            The Board of ASPIRE consists of the following sub-committees:
          </p>
          <p className="mt-4 text-lg text-gray-800">
            <strong> Audit and Risk Committee (ARC)</strong>
          </p>{" "}
          <p className="mt-4 text-lg text-gray-800">
            Section 166(1) of the Municipal Finance Management Act of 2003
            provides that each municipality and each municipal entity must have
            an audit committee. Section 166(6) of the same Act further provides
            that a single audit committee may be established for, inter alia, a
            municipality and a municipal entity under its sole control. Thus, in
            terms of section 166(1) read with section 166(6) of the Municipal
            Finance Management Act of 2003, the council of ADM appointed an
            Audit and Risk Committee to serve both ADM and ASPIRE.
          </p>
          <p className="mt-4 text-lg text-gray-800">
            The committee is made up of five (5) independent members and 1
            non-executive director and is scheduled to meet at least 4 times a
            year. As provided for in the Municipal Finance Management Act, this
            committee is responsible for overseeing effectiveness of internal
            controls, financial reporting, risk management and performance of
            internal auditors.
          </p>{" "}
          <p className="mt-4 text-lg text-gray-800">
            <strong> Social and Ethics Committee (SEC)</strong>
          </p>{" "}
          <p className="mt-4 text-lg text-gray-800">
            The Committee is a statutory committee in respect of those statutory
            duties assigned to it in terms of section 72(4) of the Companies Act
            of 2008. As a committee of the Board, it performs all other duties
            as assigned to it by the Board. The duties and responsibilities of
            the members are set out in its terms of reference.
          </p>{" "}
          <p className="mt-4 text-lg text-gray-800">
            The Committee monitors and has oversight over the following
            functional areas:
          </p>{" "}
          <ul className="mt-4 text-gray-800 list-disc translate-x-6 text-md">
            <li>Social and Economic Development</li>
            <li>Good Corporate Citizenship</li>
            <li>Environment, Health and Safety</li>
            <li>Stakeholder Relationships</li>
            <li>Labour and Employment</li>
          </ul>{" "}
          <p className="mt-4 text-lg text-gray-800">
            The committee is made up of three (3) non-executive directors and is
            scheduled to meet four times in a year.
          </p>{" "}
          <p className="mt-4 text-lg text-gray-800">
            <strong> Finance Committee</strong>
          </p>{" "}
          <p className="mt-4 text-lg text-gray-800">
            The Finance Committee assists the Board in fulfilling its oversight
            responsibilities on matters relating to, or having a bearing on the
            overall financial management and performance of ASPIRE. The focus of
            the committee is on matters relating to, or having a bearing on the
            overall financial management and performance of ASPIRE.
            Responsibility for policies and strategies relating to Treasury
            activities, supply chain management, optimum debtor&apos;s management,
            optimal management of capital spending and budgeting also rests with
            this committee. The committee will also be responsible to ensure
            that the Supply Chain Management Policy is correctly implemented on
            receipt of the Quarterly reports from Management.
          </p>{" "}
          <p className="mt-4 text-lg text-gray-800">
            The committee is made up of three (3) non-executive directors and is
            scheduled to meet 4 times a year.
          </p>{" "}
          <p className="mt-4 text-lg text-gray-800">
            <strong> Projects Committee</strong>
          </p>{" "}
          <p className="mt-4 text-lg text-gray-800">
            The overall objective of the Projects Committee is to address
            capacity constraints hampering ADM&apos;s Local Municipalities from
            accessing and steering Projects implementation. In its functional
            approach, the Projects Committee will particularly focus on gaps
            within wider international support on development readiness and
            through programmatic and capacity-embedding functions will assist
            targeted Local Municipalities within Aspire Development Agency
            Service area. Provision of technical assistance, knowledge creation
            and transfer to selected Local Municipalities and collaborating with
            Amathole District Municipality&apos;s PMO and other organizations on
            Project Development will be key functions of the Projects Committee.
          </p>{" "}
          <p className="mt-4 text-lg text-gray-800">
            The committee is made up of three (3) non-executive directors and is
            scheduled to meet 4 times a year.
          </p>{" "}
        </div>
      </div>
    </Container>
  );
};
export default Details;
