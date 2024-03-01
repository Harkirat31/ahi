import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <>
      return (
      <>
        <div className="ml-8  bg-black/20 pb-8 mr-4 flex max-w-fit flex-col">
          <div className="flex flex-row justify-between items-center mr-4">
            <div className="flex flex-row mt-4">
              <div className="w-2 h-6 sm:w-4 sm:h-8 lg:h-10 ahi-theme-color"></div>
              <p className="pl-2 text-lg  lg:text-2xl xl:text-4xl font-bold text-black">
                Featured Products
              </p>
            </div>
            <Link
              className="text-ahi_primary_color font-bold underline"
              href={"#"}
            >
              View All
            </Link>
          </div>
          <div className=" mt-4 flex flex-wrap justify-center gap-1">
            <div className="bg-black h-[400px] w-[400px] md:h-[600px] md:w-[600px]"></div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-red-400 w-[200px] h-[200px] md:h-[300px] md:w-[300px]"></div>
              <div className="bg-green-400 w-[200px] h-[200px] md:h-[300px] md:w-[300px]"></div>
            </div>
          </div>
        </div>
      </>
      );
    </>
  );
}
