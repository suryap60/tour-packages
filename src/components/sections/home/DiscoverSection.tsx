import Image from "next/image";

export default function DiscoverSection() {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden bg-white flex items-center justify-center">
        {/* Background Image */}
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background image"
          src="/assets/imgs/banner/beach.jpg"
          width={1440}
          height={4823}
          priority
        />

        {/* Overlay Gradient */}
        <div className="relative z-10 container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20">
            <div className="bg-black/50 rounded-3xl p-10 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl">
          {/* Text Section */}
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-[#ffe500] font-semibold text-2xl sm:text-3xl md:text-4xl">
                    Discover
                    </h3>
                    <h2 className="text-white font-extrabold text-[#ffe500] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                    Lakshadweep
                    </h2>
                    <p className="[font-family:'Montserrat',Helvetica] font-light text-white text-2xl sm:text-lg md:text-xl lg:text-2xl max-w-3xl lg:text-left">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&#39;s standard dummy
                    text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                    </p>

                    <button className="mt-8 border border-[#ffe500] text-[#ffe500] text-xl font-extralight px-8 py-3 rounded-[20px] hover:bg-[#ffe500] hover:text-black transition-all duration-300">
                    Explore →
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex flexjustify-center items-center relative gap">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Image
                        alt="Discover image 1"
                        src="/assets/imgs/banner/discover1.png"
                        width={397}
                        height={285}
                        className="rounded-lg object-cover"
                        />
                        <Image
                        alt="Discover image 2"
                        src="/assets/imgs/banner/discover2.png"
                        width={355}
                        height={556}
                        className="rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
