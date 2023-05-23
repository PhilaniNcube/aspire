import Container from "@/components/ui/Container";

const items = [
  {
    title: "Awards Won",
    qty: 2
  },
  {
    title: "Complete Economic Studies",
    qty: 27
  },
  {
    title: "Mega Projects",
    qty: 14
  },
  {
    title: "Investment Value",
    qty: "100M+"
  }
]

const Parallax = () => {
  return (
    <section
      style={{ backgroundImage: "url(/images/parallax.png)" }}
      className="relative bg-fixed bg-center bg-no-repeat bg-cover bg-yellow-400/30"
    >
      <div className="py-10 bg-yellow-400/30 flex items-center justify-center min-h-[20vh]">
        <Container>
          <div className="grid grid-cols-2 gap-6 py-5 bg-transparent lg:grid-cols-4">
            {items.map((item, index) => (
              <article
                key={index}
                className="flex flex-col items-center justify-center p-6 space-y-4"
              >
                <p className="text-6xl font-bold text-white">{item.qty}</p>
                <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Parallax;
