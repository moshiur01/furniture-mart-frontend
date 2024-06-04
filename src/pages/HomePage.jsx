import Banner from "../components/Home/Banner";
import FeatureCard from "../components/Home/FeatureCard";
import HowItWorks from "../components/Home/HowItWorks";
import ProductCard from "../components/Home/ProductCard";
import RangeCard from "../components/Home/RangeCard";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeatureCard />
      <ProductCard />
      <RangeCard />
      <HowItWorks />
    </div>
  );
};

export default HomePage;
