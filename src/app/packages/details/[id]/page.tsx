import { getTourById } from "@/lib/getTourById";
import TourPackageDetail from "../TourPackageDetail";

export default function Page({ params }: { params: { id: string } }) {
  const tour = getTourById(params.id);

  if (!tour) {
    return <div className="p-10 text-red-600 text-xl">Tour not found</div>;
  }

  return <TourPackageDetail tour={tour} />;
}
