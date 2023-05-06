import { useContext, useEffect, useState } from "react"
import { IMyContext, MyContext } from "../../context/MyContext"

export function BookParameter() {
  const [weight, setWeight] = useState('');

  const {setAttribute } = useContext(MyContext) as IMyContext;

  useEffect(() => {
    setAttribute({ weight });
  },[weight])

  return (
    <div id="Book" className="sm:w-[300px] sm:bg-red-300">
      <input
        id="weight"
        className="sm:p-[10px] sm:w-full sm:border-[1px] sm:border-black sm:mt-[20px]"
        placeholder="Weight (KG)"
        name="weight"
        value={weight} 
        onChange={(e) => setWeight(e.target.value)}
        minLength={3}
    />

      <p className="sm:text-[12px] sm:mb-[10px] sm:text-[gray]">*No need to incude units at the input.</p>
      <p className="sm:text-[14px] sm:font-bold">This is how mutch weight your book have.</p>
    </div>
  )
}