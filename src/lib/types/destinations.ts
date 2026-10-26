/** Shape of a destination record served by the API (localhost:8000). */
export interface IDestination {
  _id: string;
  name: string;
  country: string;
  category?: string;
  price: string;
  duration?: string;
  departureDate?: string;
  imageUrl?: string;
  description?: string;
  rating?: string | number;
}
