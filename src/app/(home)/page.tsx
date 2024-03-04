import FeaturedProducts from "@/components/home/featured_products";
import HomeIntro from "@/components/home/home_intro";
import HomeProductGrid from "@/components/home/home_product_grid";
import CategorySlider from "@/components/sliders/category_slider";
import Image from "next/image";
const home = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-cover h-[25vw] bg-[url('/dummy/bg5.jpg')] ">
        <div className="flex flex-col justify-center h-full px-20">
          <CategorySlider></CategorySlider>
        </div>
      </div>

      <HomeIntro></HomeIntro>
      <HomeProductGrid></HomeProductGrid>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
};

export default home;
