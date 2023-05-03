import { createContext, useState } from "react";

import { IData } from "../pages/home/Home";

export type IMyContext = {
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
}

export const MyContext = createContext<IMyContext | null>(null);

type Props = {
  children: JSX.Element,
}

export function MyProvider({ children }: Props) {
  const [data, setData] = useState<IData[]>([]);
  return (
    <MyContext.Provider value={{
      data, setData,
    } as IMyContext}>
      {children}
    </MyContext.Provider>
  );
}