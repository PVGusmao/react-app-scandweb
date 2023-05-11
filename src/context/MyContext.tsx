import { createContext, useState } from "react";

import { IData } from "../pages/home/Home";
import { AxiosRequestConfig } from "axios";

export interface IAttribute {
  weight?: string;
  size?: string;
  height?: string;
  length?: string;
  width?: string;
}

export type IMyContext = {
  data: IData[];
  sku: string;
  name:string;
  price: number;
  attribute: IAttribute;
  selectValue: string;
  idCards: number[]
  setIdCards: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  setAttribute: React.Dispatch<React.SetStateAction<IAttribute>>;
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
  const [price, setPrice] = useState<number>(0);
  
  const [selectValue, setSelectValue] = useState<string>('');
  
  const [attribute, setAttribute] = useState<IAttribute>({});
  
  const [idCards, setIdCards] = useState<number[]>([]);
  
  return (
    <MyContext.Provider value={{
      data, setData,
      sku, setSku,
      name, setName,
      price, setPrice,
      attribute, setAttribute,
      selectValue, setSelectValue,
      idCards, setIdCards,
    } as IMyContext}>
      {children}
    </MyContext.Provider>
  );
}