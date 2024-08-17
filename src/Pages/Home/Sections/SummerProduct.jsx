import Section from "../../../Components/Section";
import summerProduct from "../../../assets/summer-produc.png";
const SummerProduct = () => {
  return (
    <Section className="flex flex-col md:flex-row lg:flex-row *:flex-1 md:h-[514px] lg:h-[514px] mt-10">
      <div className="h-[514px]">
        <img src={summerProduct} className="size-full" alt="" />
      </div>
      <div className="lg:bg-[#F5F5F5] md:bg-[#F5F5F5] flex justify-center items-center">
        <div className="max-w-[318px] flex flex-col items-center justify-center text-center">
          <p className="text-sm font-medium uppercase">SALE EVENT</p>
          <h2 className="text-3xl font-bold my-2">
            Summer Product Limited Offer - $20
          </h2>
          <p className="text-sm font-medium">
            Until 12/06/24. use code SUMFEST at checkout
          </p>
          <button className="px-5 py-1 text-lg font-medium border border-black rounded-md mx-auto mt-12">
            Shop Now
          </button>
        </div>
      </div>
    </Section>
  );
};

export default SummerProduct;
