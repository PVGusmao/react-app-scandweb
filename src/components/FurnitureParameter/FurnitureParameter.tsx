import { useContext, useEffect, useState } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

export function FurnitureParameter() {
  const { setAttribute } = useContext(MyContext) as IMyContext;

  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');

  useEffect(() => {
    setAttribute({height, width, length});
  },[height, width, length])

  return (
    <div id="Furniture" className="sm:w-[300px] sm:bg-green-300">
      <input
        id="height"
        className="sm:p-[10px] sm:w-full sm:border-[1px] sm:border-black sm:mt-[20px]"
        placeholder="Height (CM)"
        name="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        id="width"
        className="sm:p-[10px] sm:w-full sm:border-[1px] sm:border-black sm:mt-[20px]"
        placeholder="Width (KG)"
        name="width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />

      <input
        id="length"
        className="sm:p-[10px] sm:w-full sm:border-[1px] sm:border-black sm:mt-[20px]"
        placeholder="Length (KG)"
        name="length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      
      <p className="sm:text-[12px] sm:mb-[10px] sm:text-[gray]">*No need to incude units at the input.</p>
      <p className="sm:text-[14px] sm:font-bold">These are the dimensions of the furniture that you want to register here.</p>
    </div>
  )
}