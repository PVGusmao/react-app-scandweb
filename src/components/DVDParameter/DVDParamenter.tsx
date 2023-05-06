import { useContext, useEffect, useState } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

export function DVDParameter() {
  const [size, setSize] = useState('');

  const { setAttribute } = useContext(MyContext) as IMyContext;

  useEffect(() => {
    setAttribute({size});
  },[size])

  return (
    <div id="DVD" className="sm:w-[300px] bg-[lightgray]">
      <input
        id="size"
        className="sm:p-[10px] sm:w-full sm:border-[1px] sm:border-black sm:mt-[20px]"
        placeholder="Size (MB)"
        name="size"
        value={size}
        onChange={(e) => setSize(e?.target?.value)}
      />

      <p className="sm:text-[12px] sm:mb-[10px] sm:text-[gray]">*No need to incude units at the input.</p>
      <p className="sm:text-[14px] sm:font-bold">This is size of the DVD, the capacity of saving data.</p>
    </div>
  )
}