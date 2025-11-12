import PackageIncludes from "@/components/sections/package/PackageIncludes";
import PackageExcludes from "@/components/sections/package/PackageExcludes";
import TravelPlans from "@/components/sections/package/TravelPlans";
import Testimonials from "@/components/sections/package/Testimonials";
import PackageGallery from "@/components/sections/package/PackageGallery";
import BookTour from "@/components/sections/package/BookTour";
import PackageHeader from "@/components/sections/package/PackageHeader";
import Navbar from "@/components/layout/Navbar";

export default function Package() {
    const navigationItems = [
    { label: "Home", href: "#", active: true },
    { label: "Tours", href: "#", active: false },
    { label: "About", href: "#", active: false },
    { label: "Login", href: "#", active: false },
  ];
  return (
    <main className="bg-white text-black ">
        <Navbar navigationItems={navigationItems} />
      <PackageHeader />
      <section className="[font-family:'Montserrat',Helvetica] text-lg container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 text-2xl font-light">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </section>
      <PackageIncludes />
      <PackageExcludes />
      <TravelPlans />
      <Testimonials />
      <PackageGallery />
      <BookTour />
    </main>
  );
}
