type Props = {
  selectValue: string,
}

export function DynamicTypeParameters({ selectValue }: Props) {
  console.log(selectValue);
  return (
    <div className="sm:p-[10px] sm:w-[300px] sm:m-[10px] bg-[gray]">
      <h1>{selectValue}</h1>
    </div>
  )
}