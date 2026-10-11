import Info1 from "../Info1";
const Carrers_component = () => {
  return (
    <>
      <div className=" md:mb-16 p-4 md:p-14">
        {Info1.map((item) => (
          <div className="flex flex-row gap-2 " key={item.id}>
            <button
              type="button"
              className="border bg-[hsl(12,88%,59%)] text-white py-2 px-6 rounded-3xl mb-80 md:mb-32"
            >
              0{item.id}
            </button>
            <div>
              <h1 className="text-[hsl(228,39%,23%)] font-bold text-2xl">
                {item.carrers}
              </h1>{" "}
              <p className="py-6 md:pr-32">{item.definition}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carrers_component;
