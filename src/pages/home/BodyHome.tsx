import { useContext } from "react";

import { IMyContext, MyContext } from "../../context/MyContext";
import { CardProduct } from "../../components/CardProduct/CardProdcut";
import { IData } from "./Home";

export function BodyHome() {
  const { data } = useContext(MyContext) as IMyContext;

  return (
    <div className="">
      <div className="sm:flex sm:flex-wrap">
        {
          data.length > 0 && data?.map((element: IData, index:number) => (
            <CardProduct
              key={index}
              data={element}
            />
          ))
        }
      </div>
    </div>
  )
}