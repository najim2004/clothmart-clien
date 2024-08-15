import Section from "../../Components/Section";
import Banner from "./Sections/Banner";
import BestSell from "./Sections/BestSell";
import Catagories from "./Sections/Catagories";
import SummerProduct from "./Sections/SummerProduct";
import WhyChooseUs from "./Sections/WhyChooseUs";
const Home = () => {
  return (
    <div>
      <Banner />
      <Catagories />
      <BestSell />
      <WhyChooseUs />
      <SummerProduct />
    </div>
  );
};

export default Home;
