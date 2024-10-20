export interface Car {
  id: number;
  model: string;
  year: number;
  price: number;
  images: string[];
  specs: {
    engine: string;
    horsepower: number;
  };
}
