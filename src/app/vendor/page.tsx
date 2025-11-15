import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavbarTwo";
import VendorDetails from "@/components/sections/vendor/Vendor";
import Image from "next/image";



export default function Vendor() {
  const navigationItems = [
    { label: "Home", href: "/", active: true },
    { label: "Tours", href: "/package", active: false },
    { label: "About", href: "about", active: false },
    { label: "Login", href: "login", active: false },
  ];
  return (
    <>
      <div className="relative w-full min-h-screen bg-white flex items-center justify-center py-10 px-10">
        <Navbar navigationItems={navigationItems} />
        {/* Image Container */}
        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          {/* Background Image */}
          <Image
            src="/assets/imgs/vendor/banner.png"
            alt="Beach background"
            fill
            className="object-cover rounded-2xl"
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-between ">
            {/* Title */}
            <h1 className="text-white font-extrabold leading-none tracking-tight text-[56px] sm:text-[72px] drop-shadow-lg p-8">
              VENDOR <br /> NAME
            </h1>

            {/* Bottom Section */}
            <div className="flex w-full items-end gap-4 p-0">
              {/* Description Box — 3/4 width */}
              <div className="w-3/4 bg-black/25 backdrop-blur-sm rounded-xl m-8 p-5">
                <p className="text-white text-base sm:text-lg font-light text-center leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              {/* Button Section — 1/4 width */}
              <div className="w-1/4 flex justify-end bg-white pt-2 rounded-tl-lg">
                <button className="border-2 border-[#aea28b] text-[#aea28b] font-semibold text-lg px-24 py-3 rounded-xl bg-transparent hover:bg-[#aea28b]/10 transition">
                  Explore →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VendorDetails />
      <Footer/>
    </>
  );
}
