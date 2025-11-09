import Image from "next/image";

export default function Vendor() {
  return (
    <div className="relative w-full min-h-screen bg-white flex items-center justify-center py-10 px-10">
      {/* Image Container */}
      <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-lg px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        {/* Background Image */}
        <Image
          src="/assets/imgs/banner/beach.jpg"
          alt="Beach background"
          fill
          className="object-cover rounded-2xl"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          {/* Title */}
          <h1 className="text-white font-extrabold leading-none tracking-tight text-[56px] sm:text-[72px] drop-shadow-lg">
            VENDOR <br /> NAME
          </h1>

          {/* Bottom Section */}
          <div className="flex w-full items-end gap-4">
            {/* Description Box — 3/4 width */}
            <div className="w-3/5 bg-black/25 backdrop-blur-sm rounded-xl p-5">
              <p className="text-white text-base sm:text-lg font-light text-center leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Button Section — 1/4 width */}
            <div className="w-2/5 flex justify-center">
              <button className="border-2 border-[#aea28b] text-[#aea28b] font-semibold text-lg px-6 py-3 rounded-xl bg-transparent hover:bg-[#aea28b]/10 transition">
                Explore →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
