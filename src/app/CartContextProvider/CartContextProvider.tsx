"use client";
import React, { createContext, useState, ReactNode } from "react";


interface CartContextType {
  countNumber: number;
  setcountNumber: React.Dispatch<React.SetStateAction<number>>;
}


export const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartContextProvider({ children }: { children: ReactNode }) {
  const [countNumber, setcountNumber] = useState(0);

  return (
    <CartContext.Provider value={{ countNumber, setcountNumber }}>
      {children}
    </CartContext.Provider>
  );
}


