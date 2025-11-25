import { tours } from "./tours";


export function getTourById(id: string) {
  return tours.find((tour) => tour.id === id);
}
