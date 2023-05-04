import { IData } from "../../pages/home/Home"

type Props = {
  data: IData;
}

export function CardProduct({ data }: Props) {
  return (
    <div className={test}>
      <input
        className="delete-checkbox
        sm:absolute sm:top-3 sm:left-3"
        type="checkbox"
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