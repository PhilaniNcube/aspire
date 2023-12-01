import Container from "@/components/ui/Container";

const ObjectivesGrid = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="p-4 transition-shadow duration-200 ease-in-out rounded-lg shadow-lg bg-slate-100 hover:shadow-xl">

            <p className="font-bold text-gray-500 ">
              Establish ASPIRE as a world leading development institution.
            </p>
          </div>
          <div className="p-4 transition-shadow duration-200 ease-in-out rounded-lg shadow-lg bg-slate-100 hover:shadow-xl">

            <p className="font-bold text-gray-500 ">
              Promote innovative industry value chain enterprise growth
            </p>
          </div>
          <div className="p-4 transition-shadow duration-200 ease-in-out rounded-lg shadow-lg bg-slate-100 hover:shadow-xl">

            <p className="font-bold text-gray-500 ">
              Optimise the socio-economic value of district-owned  infrastructure assets
            </p>
          </div>
          <div className="p-4 transition-shadow duration-200 ease-in-out rounded-lg shadow-lg bg-slate-100 hover:shadow-xl">

            <p className="font-bold text-gray-500 ">
              Promote ADM as a domestic and international investment location
            </p>
          </div>
          <div className="p-4 transition-shadow duration-200 ease-in-out rounded-lg shadow-lg bg-slate-100 hover:shadow-xl">

            <p className="font-bold text-gray-500 ">
              Position ADM as a Smart District
            </p>
          </div>
        </div>
        <div className="w-full py-3 mt-8 rounded-md shadow-lg bg-aspire text-slate-800">
          <h3 className="text-xl font-semibold text-center md:text-2xl">Development Pillars</h3>
          <p className="mt-3 text-sm font-semibold text-center md:text-md lg:text-lg">
            LAND REFORM | AGRARIAN TRANSFORMATION AND FOOD SECURITY | RURAL ECONOMY | INFRASTRUCTURE | SOCIAL AND HUMAN DEVELOPMENT
          </p>
        </div>
        <div className="w-full py-3 mt-8 bg-blue-700 rounded-md shadow-lg text-slate-100">
          <h3 className="text-xl font-semibold text-center md:text-2xl">Drivers For Change</h3>
          <p className="mt-3 text-sm font-semibold text-center md:text-md lg:text-lg">
           GOVERNANCE | ECONOMY | SOCIETY | INFRASTRUCTURE | ENVIRONMENTAL AND NATURAL RESOURCES | SOCIAL CHANGE | IDEOLOGY | TECHNOLOGY
          </p>
        </div>
      </Container>
    </section>
  );
};
export default ObjectivesGrid;
