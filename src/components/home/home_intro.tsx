export default function HomeIntro() {
  return (
    <div className="mt-8 mb-8">
      <div className="text-black h-[500px]  sm:h-[400px]  absolute ml-8  bg-black/20 w-3/5 flex flex-row">
        <div className="flex flex-row mt-4">
          <div className="w-2 h-8 lmd:w-4 lmd:h-12 bg-black ahi-theme-color"></div>
          <p className="pl-2 text-xl lmd:text-4xl ">Introduction</p>{" "}
        </div>
      </div>
      <div className="absolute mt-16 lmd:mt-24 bg-black/90 w-5/6">
        <p className="px-8 py-8 text-xs lmd:text-sm md:text-lg">
          Welcome to ANDRE HVAC International (AHI), your premier trusted source
          for cutting-edge vibration control products designed specifically for
          commercial, industrial, construction, and heavy machinery
          applications. With an unwavering dedication to engineering excellence,
          we specialize in crafting high-quality solutions that effectively
          minimize vibration, noise, and shock, ensuring the smooth and
          efficient operation of critical systems. Backed by years of experience
          and a commitment to innovation, our products range from advanced
          anti-vibration mounts to precision-engineered hangers and isolators.
          At ANDRE HVAC International, we take pride in being more than just a
          manufacturer; we are your reliable partner in enhancing performance,
          reducing maintenance, and creating quieter environments across the
          commercial, industrial, construction, and heavy machinery sectors.
        </p>
      </div>
    </div>
  );
}
