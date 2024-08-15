import Section from "../../../Components/Section";
import product1 from "../../../assets/louis.png";
import product2 from "../../../assets/product2.png";
import product3 from "../../../assets/product3.png";
import product4 from "../../../assets/product4.png";
import ILike from "../../../assets/like.svg";
import IStar from "../../../assets/star.svg";
const BestSell = () => {
  return (
    <Section className="mt-10 flex flex-col items-center">
      <h3 className="text-[40px] font-bold mx-auto text-center mb-7">
        Best Sell Product
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
        <div className="">
          <div className="relative h-[336px] w-full">
            <img src={product1} alt="" />
            <button className="bg-white p-2 rounded-full absolute top-3 right-3">
              <img src={ILike} alt="" />
            </button>
            <div className="absolute bg-white p-[6px] bottom-3 left-3 flex gap-1 items-center text-sm font-medium rounded-sm">
              <p className="flex gap-1 items-center">
                4.2 <img className="size-[14px]" src={IStar} alt="" />
              </p>
              |<p>690</p>
            </div>
            <div className="absolute bg-white p-[6px] top-3 left-3 flex gap-1 items-center text-sm font-medium rounded-md">
              <p>$ 999</p>
            </div>
          </div>
          <div className="px-3 mt-1">
            <h3 className="text-lg font-medium">Louis Philippe</h3>
            <p className="text-sm font-medium text-[#717171]">
              Lightly Washed Slim Fit Jeans
            </p>

            <div className="flex justify-between mt-1">
              <p className="text-sm font-medium text-[#717171]">
                man&#39;s {">"} Jeans
              </p>
              <p className="text-sm font-medium text-[#717171]">10 Jun 2024</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative h-[336px] w-full">
            <img src={product1} alt="" />
            <button className="bg-white p-2 rounded-full absolute top-3 right-3">
              <img src={ILike} alt="" />
            </button>
            <div className="absolute bg-white p-[6px] bottom-3 left-3 flex gap-1 items-center text-sm font-medium rounded-sm">
              <p className="flex gap-1 items-center">
                4.2 <img className="size-[14px]" src={IStar} alt="" />
              </p>
              |<p>690</p>
            </div>
            <div className="absolute bg-white p-[6px] top-3 left-3 flex gap-1 items-center text-sm font-medium rounded-md">
              <p>$ 999</p>
            </div>
          </div>
          <div className="px-3 mt-1">
            <h3 className="text-lg font-medium">Louis Philippe</h3>
            <p className="text-sm font-medium text-[#717171]">
              Lightly Washed Slim Fit Jeans
            </p>

            <div className="flex justify-between mt-1">
              <p className="text-sm font-medium text-[#717171]">
                man&#39;s {">"} Jeans
              </p>
              <p className="text-sm font-medium text-[#717171]">10 Jun 2024</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative h-[336px] w-full">
            <img src={product1} alt="" />
            <button className="bg-white p-2 rounded-full absolute top-3 right-3">
              <img src={ILike} alt="" />
            </button>
            <div className="absolute bg-white p-[6px] bottom-3 left-3 flex gap-1 items-center text-sm font-medium rounded-sm">
              <p className="flex gap-1 items-center">
                4.2 <img className="size-[14px]" src={IStar} alt="" />
              </p>
              |<p>690</p>
            </div>
            <div className="absolute bg-white p-[6px] top-3 left-3 flex gap-1 items-center text-sm font-medium rounded-md">
              <p>$ 999</p>
            </div>
          </div>
          <div className="px-3 mt-1">
            <h3 className="text-lg font-medium">Louis Philippe</h3>
            <p className="text-sm font-medium text-[#717171]">
              Lightly Washed Slim Fit Jeans
            </p>

            <div className="flex justify-between mt-1">
              <p className="text-sm font-medium text-[#717171]">
                man&#39;s {">"} Jeans
              </p>
              <p className="text-sm font-medium text-[#717171]">10 Jun 2024</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative h-[336px] w-full">
            <img src={product1} alt="" />
            <button className="bg-white p-2 rounded-full absolute top-3 right-3">
              <img src={ILike} alt="" />
            </button>
            <div className="absolute bg-white p-[6px] bottom-3 left-3 flex gap-1 items-center text-sm font-medium rounded-sm">
              <p className="flex gap-1 items-center">
                4.2 <img className="size-[14px]" src={IStar} alt="" />
              </p>
              |<p>690</p>
            </div>
            <div className="absolute bg-white p-[6px] top-3 left-3 flex gap-1 items-center text-sm font-medium rounded-md">
              <p>$ 999</p>
            </div>
          </div>
          <div className="px-3 mt-1">
            <h3 className="text-lg font-medium">Louis Philippe</h3>
            <p className="text-sm font-medium text-[#717171]">
              Lightly Washed Slim Fit Jeans
            </p>

            <div className="flex justify-between mt-1">
              <p className="text-sm font-medium text-[#717171]">
                man&#39;s {">"} Jeans
              </p>
              <p className="text-sm font-medium text-[#717171]">10 Jun 2024</p>
            </div>
          </div>
        </div>
      </div>
      <button className="px-5 py-1 text-lg font-medium border border-black rounded-md mx-auto mt-12">
        Load More
      </button>
    </Section>
  );
};

export default BestSell;
