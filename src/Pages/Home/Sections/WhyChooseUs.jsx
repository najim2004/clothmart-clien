import freeShipping from "../../../assets/free shipping.svg";
import customerService from "../../../assets/customer-service.svg";
import moneyBack from "../../../assets/money back.svg";
import IStarBlack from "../../../assets/star-black.svg";
import Section from "../../../Components/Section";

const WhyChooseUs = () => {
  return (
    <Section>
      <hr className="mt-12 mb-10 border-black" />
      <div className="w-full flex justify-center gap-12">
        <div className="max-w-[270px] space-y-4 flex flex-col justify-center items-center text-justify">
          <img src={freeShipping} alt="" />
          <h2 className="text-2xl font-bold">FREE SHIPPING</h2>
          <img className="size-[18px] mx-auto" src={IStarBlack} alt="" />
          <p className="text-sm font-medium">
            ENJOY FREE SHIPPING ON ALL ORDERS NO MINIMUM PURCHASE REQUIRED.
          </p>
        </div>
        <div className="max-w-[270px] space-y-4 flex flex-col justify-center items-center text-justify">
          <img src={customerService} alt="" />
          <h2 className="text-2xl font-bold">FREE SHIPPING</h2>
          <img className="size-[18px] mx-auto" src={IStarBlack} alt="" />
          <p className="text-sm font-medium">
            ENJOY FREE SHIPPING ON ALL ORDERS NO MINIMUM PURCHASE REQUIRED.
          </p>
        </div>
        <div className="max-w-[270px] space-y-4 flex flex-col justify-center items-center text-justify">
          <img src={moneyBack} alt="" />
          <h2 className="text-2xl font-bold">FREE SHIPPING</h2>
          <img className="size-[18px] mx-auto" src={IStarBlack} alt="" />
          <p className="text-sm font-medium">
            ENJOY FREE SHIPPING ON ALL ORDERS NO MINIMUM PURCHASE REQUIRED.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
