import { useContext } from "react";
import { IData } from "../../pages/home/Home"
import { IMyContext, MyContext } from "../../context/MyContext";

type Props = {
  data: IData;
}

export function CardProduct({ data }: Props) {
  const { idCards, setIdCards } = useContext(MyContext) as IMyContext;

  function handleCheckboxChange(value: number) {
    if(idCards.some((element) => element === value)) {
      setIdCards(idCards.filter((element) => element !== value));
      return
    }

    setIdCards([...idCards, value]);
  }

  return (
    <div className={test}>
      <input
        className="delete-checkbox
        sm:absolute sm:top-3 sm:left-3"
        type="checkbox"
        onChange={(e) => handleCheckboxChange(Number(e.target.value))}
        value={data.id}
      />
      
      <p className="text-center text-[12px]">{data?.sku}</p>
      <p className="text-center text-[12px]">{data?.name}</p>
      <p className="text-center text-[12px]">$ {data?.price}</p>
      <p className="text-center text-[12px]">{data?.type}: {data?.attribute}</p>
    </div>
  )
}

const test = `
  sm:relative
  sm:border-[1px]
  sm:border-black
  sm:border-solid
  sm:flex
  sm:flex-col
  sm:h-[150px]
  sm:items-center
  sm:justify-evenly
  sm:m-[20px]
  sm:p-[10px]
  sm:rounded-[10px]
  sm:w-[170px]
`;