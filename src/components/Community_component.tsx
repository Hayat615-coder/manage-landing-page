import Info2 from "../info2";
const Community_component = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[hsl(228,39%,23%)] font-bold text-2xl p-4 md:mb-8">
        What they've said
      </h1>
      <div className="flex flex-row overflow-x-auto snap-x snap-mandatory scroll-smooth md:justify-center gap-4 scroll-pl-4 px-6">
        {Info2.map((item) => (
          <div
            key={item.id}
            className="flex flex-col shrink-0 max-w-full md:w-[30%] items-center justify-center snap-start bg-slate-100 p-6 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h2 className="text-[hsl(228,39%,23%)] text-lg font-bold">
              {item.name}
            </h2>
            <p className="text-center">{item.comment}</p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="flex border self-center rounded-full bg-[hsl(12,88%,59%)] text-white py-2 px-4 ml-14 mt-6 mb-8 hover:shadow shadow-[0px,2px,0,2px]"
      >
        Get Started
      </button>
    </div>
  );
};

export default Community_component;
