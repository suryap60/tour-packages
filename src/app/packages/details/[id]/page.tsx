import { getTourById } from "@/lib/tours";
import TourPackageDetail from "../TourPackageDetail";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const tour = getTourById(params.id);

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-4">The tour you&apos;re looking for doesn&apos;t exist.</p>
          <a href="/packages" className="text-blue-600 hover:underline">
            Back to Tours
          </a>
        </div>
      </div>
    );
  }

  return <TourPackageDetail tour={tour} />;
}