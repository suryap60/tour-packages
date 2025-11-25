export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  groupSize: string;
  featured?: boolean;
  highlights: string[];
  description?: string;
  itinerary?: {
    day: number;
    title: string;
    description: string;
    activities?: string[];
  }[];
  gettingThere?: string;
  accommodation?: string;
  meals?: string;
  importantNotes?: string[];
}

export const tours: TourPackage[] = [
  {
    id: "1",
    title: "Tropical Paradise Escape",
    destination: "Maldives",
    duration: "7 Days",
    price: 2499,
    rating: 4.9,
    reviews: 234,
    image: "/assets/imgs/package/package.png",
    groupSize: "2-8 people",
    featured: true,
    description: "Experience ultimate luxury in the beautiful Maldives with this all-inclusive tropical getaway.",
    highlights: [
      "Luxury beach resort accommodation",
      "Snorkeling and diving excursions",
      "Private island tours",
      "All meals included"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paradise",
        description: "Welcome to the Maldives! Transfer to your luxury resort and settle in."
      },
      {
        day: 2,
        title: "Island Exploration",
        description: "Full day of exploring the local islands and marine life."
      }
    ],
    gettingThere: "International flight to Malé International Airport (MLE), followed by speedboat transfer to your resort.",
    accommodation: "5-star luxury beach resort with private villa and pool"
  },
  // ... keep your other tour objects, add more details as needed
];

export function getTourById(id: string): TourPackage | undefined {
  return tours.find((tour) => tour.id === id);
}