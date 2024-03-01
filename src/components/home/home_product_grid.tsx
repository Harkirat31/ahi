import SingleProductGrid from "./single_product_grid";

export default function HomeProductGrid() {
  return (
    <>
      <div className="ml-8  bg-black/20 pb-8 h-[750px] flex flex-col overflow-scroll">
        <div className="flex flex-row mt-4">
          <div className="w-2 h-6 sm:w-4 sm:h-8 lg:h-10 ahi-theme-color"></div>
          <p className="pl-2 text-lg  lg:text-2xl xl:text-4xl font-bold text-black">
            Products
          </p>
        </div>
        <div className=" mt-4 flex flex-wrap gap-1">
          <SingleProductGrid></SingleProductGrid>
          <SingleProductGrid></SingleProductGrid>
          <SingleProductGrid></SingleProductGrid>
          <SingleProductGrid></SingleProductGrid>
          <SingleProductGrid></SingleProductGrid>
          <SingleProductGrid></SingleProductGrid>
          <SingleProductGrid></SingleProductGrid>
          <SingleProductGrid></SingleProductGrid>
          <SingleProductGrid></SingleProductGrid>
          <SingleProductGrid></SingleProductGrid>
        </div>
      </div>
    </>
  );
}
