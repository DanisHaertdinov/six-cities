interface Host {
  avatar: string;
  name: string;
  isSuper: boolean;
}

export interface Offer {
  id: number;
  city: string;
  photos: string[];
  title: string;
  description: string;
  isPremium: boolean;
  isFavorite: boolean;
  type: string;
  rating: number;
  numberOfBedrooms: number;
  capacity: number;
  price: number;
  goods: string[];
  host: Host;
  reviews: number[];
}
