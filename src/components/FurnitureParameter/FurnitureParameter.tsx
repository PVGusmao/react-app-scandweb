import { useContext, useEffect, useState } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

export function FurnitureParameter() {
  const { setAttribute } = useContext(MyContext) as IMyContext;
  
  const [textHeight, setTextHeight] = useState('');
  const [textWidth, setTextWidth] = useState('');
  const [textLength, setTextLength] = useState('');

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
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        onFocus={() => !height && setTextHeight('*Should fill in the fild above.')}
        onBlur={() => setTextHeight('')}
      />

      {
        !height && <p className="sm:text-[red] sm:mt-[5px] sm:text-[12px]">{textHeight}</p>
      }

      <input
        id="width"
        className="sm:p-[10px] sm:w-full sm:border-[1px] sm:border-black sm:mt-[20px]"
        placeholder="Width (KG)"
        name="width"
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        onFocus={() => !width && setTextWidth('*Should fill in the fild above.')}
        onBlur={() => setTextWidth('')}
      />

      {
        !width && <p className="sm:text-[red] sm:mt-[5px] sm:text-[12px]">{textWidth}</p>
      }

      <input
        id="length"
        className="sm:p-[10px] sm:w-full sm:border-[1px] sm:border-black sm:mt-[20px]"
        placeholder="Length (KG)"
        name="length"
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        onFocus={() => !length && setTextLength('*Should fill in the fild above.')}
        onBlur={() => setTextLength('')}
      />

      {
        !length && <p className="sm:text-[red] sm:mt-[5px] sm:text-[12px]">{textLength}</p>
      }
      
      <p className="sm:text-[12px] sm:mb-[10px] sm:text-[gray]">*No need to incude units at the input.</p>
      <p className="sm:text-[14px] sm:font-bold">These are the dimensions of the furniture that you want to register here.</p>
    </div>
  )
}