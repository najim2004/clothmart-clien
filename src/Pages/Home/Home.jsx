import Section from "../../Components/Section";
import Banner from "./Sections/Banner";
import BestSell from "./Sections/BestSell";
import Catagories from "./Sections/Catagories";
const Home = () => {
  return (
    <div>
      <Banner />
      <Catagories />
      <BestSell />
    </div>
  );
};

export default Home;
