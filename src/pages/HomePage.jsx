import Banner from "../components/Home/Banner";
import FeatureCard from "../components/Home/FeatureCard";
import HowItWorks from "../components/Home/HowItWorks";
import NewsLetter from "../components/Home/NewsLetter";
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
      <NewsLetter />
    </div>
  );
};

export default HomePage;
