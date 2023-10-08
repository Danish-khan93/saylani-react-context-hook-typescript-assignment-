import { createContext } from "react";
export type GlobalContent = {
  count: number;
  setCount: (c: number) => void;
};

export const CartContext = createContext<any>(0);
