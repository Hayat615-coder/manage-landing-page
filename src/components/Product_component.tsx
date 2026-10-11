const Product_component = () => {
  return (
    <div id="product">
      <h1 className="md:text-5xl text-3xl font-bold text-[hsl(228,39%,23%)] px-6 md:pl-14 md:pr-32 pb-6">
        Bring everyone together to build better products
      </h1>
      <p className="text-[16px] px-6 md:pl-14 md:pr-80">
        Manage makes it simple for software teams to pland day-to-day tasks
        while keeping the larger team goals in view
      </p>
      <button
        type="button"
        className="flex border rounded-full bg-[hsl(12,88%,59%)] text-white py-2 px-4 ml-14 mt-6 mb-8 cursor-pointer hover:shadow shadow-[0px,2px,0,2px]"
      >
        Get Started
      </button>
    </div>
  );
};

export default Product_component;
