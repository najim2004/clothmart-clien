import heroImg from "../../../assets/hero-image.png";

const Banner = () => {
  return (
    <div className="w-full min-h-20 max-h-screen flex *:flex-1 mt-10 relative">
      <div className="bg-[#F6F6F6] hidden lg:flex"></div>
      <div className="bg-[#EEEEEE] p-10 max-w-[619px] lg:absolute top-1/2 lg:-translate-y-1/2 space-y-3 left-[200px] mx-auto lg:mx-0">
        <h2 className="text-base md:text-lg lg:text-lg font-medium uppercase">
          SUMMER SALE 50% OFF
        </h2>
        <h1 className="Architects text-[32px] md:text-[62px] lg:text-[62px]">
          Design For Beauty
        </h1>
        <p className="text-base md:text-lg lg:text-lg font-medium">
          You Can Have Anything You Want In Life You Dress For It.
        </p>
        <button className="px-5 py-2 text-lg font-medium border border-black rounded-md">
          All Collection
        </button>
      </div>
      <div className="hidden lg:flex">
        <img src={heroImg} alt="" className="size-full" />
      </div>
    </div>
  );
};

export default Banner;
