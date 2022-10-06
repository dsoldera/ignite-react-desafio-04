import { ReactNode } from "react";

export interface FoodI {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface ModalI {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}
