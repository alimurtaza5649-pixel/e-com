import Banner from "../Components/binner/Banner";
import Hero from "../Components/Hero/Hero";
import NewArrivalProducts from "../NewArrivalProducts/NewArrivalProducts";
import Sale from "./Sale";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <NewArrivalProducts />
      <Sale />
    </>
  );
};

export default Home;
