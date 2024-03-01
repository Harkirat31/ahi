const product = {
  name: "Spring Mount",
  image_url: "/dummy/spring-mount.png",
};
import Image from "next/image";
export default function SingleProductGrid() {
  return (
    <div className="flex flex-col items-center justify-between ml-10 h-80 w-60 relative ahi-theme-color">
      <div className="absolute bg-white -top-2 -left-8 w-2/3 h-5/6"></div>
      <div className="relative mt-4">
        <Image
          className="h-60 w-32"
          width={500}
          height={250}
          src={product.image_url}
          alt="product_image"
        ></Image>
      </div>
      <p className="font-bold mb-4">{product.name}</p>
    </div>
  );
}
