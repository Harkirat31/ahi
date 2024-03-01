import HomeIntro from "@/components/home/home_intro";
import HomeProductGrid from "@/components/home/home_product_grid";
import CategorySlider from "@/components/sliders/category_slider";
import Image from "next/image";
const home = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-cover h-96  bg-[url('/dummy/bg5.jpg')] ">
        <div className="flex flex-col justify-center h-full px-20">
          <CategorySlider></CategorySlider>
        </div>
      </div>

      <HomeIntro></HomeIntro>
    </div>
  );
};

export default home;
