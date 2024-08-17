import { Helmet } from "react-helmet-async";
import Banner from "./Sections/Banner";
import BestSell from "./Sections/BestSell";
import Catagories from "./Sections/Catagories";
import SummerProduct from "./Sections/SummerProduct";
import WhyChooseUs from "./Sections/WhyChooseUs";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Cloth Mart</title>
      </Helmet>
      <Banner />
      <Catagories />
      <BestSell />
      <WhyChooseUs />
      <SummerProduct />
    </div>
  );
};

export default Home;
