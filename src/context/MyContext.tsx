import { createContext, useState } from "react";

import { IData } from "../pages/home/Home";

import { IDVDattribute } from "../components/DVDParameter/DVDParamenter";
import { IBookattribute } from "../components/BookParameter/BookParamenter";
import { IDimensions } from "../components/FurnitureParameter/FurnitureParameter";

export type IMyContext = {
  data: IData[];
  sku: string;
  name:string;
  price: number;
  attribute: IDimensions | IDVDattribute |  IBookattribute;
  setAttribute: React.Dispatch<React.SetStateAction<IDimensions | IDVDattribute>>;
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  setSku: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}

export const MyContext = createContext<IMyContext | null>(null);

type Props = {
  children: JSX.Element,
}

export function MyProvider({ children }: Props) {
  const [data, setData] = useState<IData[]>([]);

  const [sku, setSku] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>();
  
  const [attribute, setAttribute] = useState<IDimensions | IDVDattribute | IBookattribute>();

  return (
    <MyContext.Provider value={{
      data, setData,
      sku, setSku,
      name, setName,
      price, setPrice,
      attribute, setAttribute,
    } as IMyContext}>
      {children}
    </MyContext.Provider>
  );
}