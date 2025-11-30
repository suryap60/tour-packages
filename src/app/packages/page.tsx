"use client";
import { useState, useMemo } from "react";
import { TourPackageCard } from "@/components/sections/packages/TourPackageCard";
import Navbar from "@/components/layout/NavbarTwo";
import Image from "next/image";
import { tours } from "@/lib/tours";
import Footer from "@/components/layout/Footer";

export default function Packages() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTours = useMemo(() => {
    if (!searchQuery) return tours;
    
    return tours.filter((tour) =>
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.destination.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const navigationItems = [
    { label: "Home", href: "/", active: false },
    { label: "Packages", href: "/packages", active: true },
    { label: "About", href: "/about", active: false },
    { label: "Login", href: "/login", active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar navigationItems={navigationItems} />
      
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden bg-white">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          alt="Travel background"
          src="/assets/imgs/banner/beach.jpg"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 pb-10">
          <h2 className="font-semibold text-white text-3xl md:text-4xl mb-2">
            Tour Packages
          </h2>
          <p className="text-white text-lg">
            Explore our curated selection of amazing destinations around the world
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-8">
        {/* Search Bar */}
        {/* <div className="mb-8">
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Search tours or destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div> */}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTours.length} {filteredTours.length === 1 ? 'package' : 'packages'}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Tour Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <TourPackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 mb-4">No tours found matching your search</p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-blue-600 hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}