import PackageIncludes from "@/components/sections/package/PackageIncludes";
import PackageExcludes from "@/components/sections/package/PackageExcludes";
import TravelPlans from "@/components/sections/package/TravelPlans";
import Testimonials from "@/components/sections/package/Testimonials";
import PackageGallery from "@/components/sections/package/PackageGallery";
import BookTour from "@/components/sections/package/BookTour";
import PackageHeader from "@/components/sections/package/PackageHeader";
import Navbar from "@/components/layout/NavbarTwo";
import Footer from "@/components/layout/Footer";

export default function Package() {
  const navigationItems = [
    { label: "Home", href: "/", active: true },
    { label: "Tours", href: "/package", active: false },
    { label: "About", href: "about", active: false },
    { label: "Login", href: "login", active: false },
  ];
  return (
    <div className="bg-white text-black max-w-screen overflow-hidden">
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
    </div>
  );
}
