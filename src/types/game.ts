export interface Game {
  id: string;
  title: string;
  genre: string;
  rating: number;
  image: string;
  description: string;
  price: string;
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}
