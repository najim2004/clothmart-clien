import bestSel1 from "../../../assets/best-sel-1.png";
import bestSel2 from "../../../assets/best-sel-2.png";
import bestSel3 from "../../../assets/best-sel-3.png";
import Section from "../../../Components/Section";

const Catagories = () => {
  return (
    <Section className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 *:max-h-[450px] *:max-w-[352px] *:mx-auto">
        <div className="group relative overflow-hidden">
          <img src={bestSel1} alt="" />
          <div className="absolute flex flex-col items-center w-full -translate-y-[50px] lg:group-hover:-translate-y-[50px] lg:translate-y-full bottom-0 duration-700">
            <h3 className="text-3xl font-bold mb-7">Men&#39;s</h3>
            <button className="px-5 py-2 text-lg font-medium border border-black rounded-md">
              View Collection
            </button>
          </div>
        </div>
        <div className="group relative overflow-hidden">
          <img src={bestSel2} alt="" />
          <div className="absolute flex flex-col items-center w-full -translate-y-[50px] lg:group-hover:-translate-y-[50px] lg:translate-y-full bottom-0 duration-700">
            <h3 className="text-3xl font-bold mb-7">Woman&#39;s</h3>
            <button className="px-5 py-2 text-lg font-medium border border-black rounded-md">
              View Collection
            </button>
          </div>
        </div>
        <div className="group relative overflow-hidden">
          <img src={bestSel3} alt="" />
          <div className="absolute flex flex-col items-center w-full -translate-y-[50px] lg:group-hover:-translate-y-[50px] lg:translate-y-full bottom-0 duration-700">
            <h3 className="text-3xl font-bold mb-7">Children&#39;s</h3>
            <button className="px-5 py-2 text-lg font-medium border border-black rounded-md">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Catagories;
