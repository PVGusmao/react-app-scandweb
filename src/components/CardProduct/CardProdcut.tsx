import { IData } from "../../pages/home/Home"

type Props = {
  data: IData;
}

export function CardProduct({ data }: Props) {
  return (
    <div style={{
      alignItems: 'center',
      border: '1px solid black',
      borderRadius: '10px',
      display: "flex",
      flexDirection: 'column',
      height: '200px',
      justifyContent: 'space-evenly',
      margin: '20px',
      width: '150px',
    }}>
      <input
        type="checkbox"
      />
      
      <p>{data?.sku}</p>
      <p>{data?.name}</p>
      <p>{data?.price}</p>
      <p>{data?.type}</p>
      <p>{data?.attribute}</p>
    </div>
  )
}