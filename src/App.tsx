import "./App.css";
import About_component from "./components/About_component";
import Carrers_component from "./components/Carrers_component";
import Community_component from "./components/Community_component";
import Footer_component from "./components/Footer_component";
import Header_component from "./components/Header_component";
import Pricing_component from "./components/Pricing_component";
import Product_component from "./components/Product_component";
import bg_simplify from "./assets/bg-simplify-section-desktop.svg";
import bg_tablet_pattern from "./assets/bg-tablet-pattern.svg";

function App() {
  return (
    <>
      <section
        id="top"
        style={{
          backgroundImage: `url(${bg_tablet_pattern}), url(${bg_tablet_pattern})`,
          backgroundPosition: "calc(100% + 400px) -240px, -520px 1120px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "814px 814px",
        }}
      >
        <Header_component />
        <div className="grid md:grid-cols-2 grid-cols-1 flex-wrap-reverse">
          <Product_component />
          <Pricing_component />
          <About_component />
          <Carrers_component />
        </div>
        <Community_component />
        <div
          style={{
            backgroundImage: `url(${bg_simplify})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="bg-[hsl(12,88%,59%)] w-full flex flex-col gap-14 md:flex-row items-center justify-center md:justify-around"
        >
          <h1 className="text-white font-bold p-4 text-5xl md:pl-28 md:mr-80">
            Simplify how your team works today.
          </h1>
          <button
            type="button"
            className="flex mr-28 border self-center rounded-full text-[hsl(12,88%,59%)] bg-white py-2 px-6 ml-14 mt-6 mb-8 hover:shadow shadow-[0px,2px,0,2px]"
          >
            Get Started
          </button>
        </div>
        <Footer_component />
      </section>
    </>
  );
}

export default App;
