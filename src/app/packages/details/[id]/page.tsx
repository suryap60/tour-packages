import { getTourById, tours } from "@/lib/tours";
import TourPackageDetail from "../TourPackageDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  // Await the params in Next.js 14+
  const { id } = await params;
  
  console.log("URL ID:", id);
  console.log("Available IDs:", tours.map(t => t.id));
  
  const tour = getTourById(id);

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-4">The tour you&apos;re looking for doesn&apos;t exist.</p>
          <p className="text-gray-500 text-sm mb-2">ID from URL: {id || 'undefined'}</p>
          <p className="text-gray-500 text-sm mb-4">Available IDs: {tours.map(t => t.id).join(", ")}</p>
          <a href="/packages" className="text-blue-600 hover:underline">
            Back to Tours
          </a>
        </div>
      </div>
    );
  }

  return <TourPackageDetail tour={tour} />;
}