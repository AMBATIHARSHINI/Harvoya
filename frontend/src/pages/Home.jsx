import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TrendingDestinations from "../sections/TrendingDestinations";
import WhyChooseUs from "../sections/WhyChooseUs";
import FeaturedPackages from "../sections/FeaturedPackages";
import Hotels from "../sections/Hotels";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingDestinations />
        <WhyChooseUs />
        <FeaturedPackages />
        <Hotels />
    </>
  );
}

export default Home;