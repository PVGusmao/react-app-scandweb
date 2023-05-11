import { useNavigate } from "react-router-dom"

export function HeaderHome() {
  const navigation = useNavigate();
  
  return (
    <div className="sm:flex sm:items-center sm:justify-between sm:m-[20px] sm:p-[20px] sm:border-b-[1px] sm:border-b-black">
      <div>
        <p
          className="sm:text-[30px]"
        >
          Product List
        </p>
      </div>

      <div className="sm:flex sm:items-center sm:justify-evenly sm:w-[300px]">
        <button
          className="
            sm:w-[100px]
            sm:h-[40px]
            sm:border-black
            sm:border-[1px]
            sm:rounded-[3px]
            sm:shadow-[3px_4px_2px_1px_rgba(0,0,0,0)]
            sm:shadow-black
            sm:active:shadow-none"
          type="button"
          onClick={() => {
            navigation('addproduct');
          }}
        >Add</button>

        <button
          id="delete-product-btn"
          className="
            sm:w-[100px]
            sm:h-[40px]
            sm:border-black
            sm:border-[1px]
            sm:rounded-[3px]
            sm:shadow-[3px_4px_2px_1px_rgba(0,0,0,0)]
            sm:shadow-black
            sm:active:shadow-none"
          type="button"
        >Mass Delete</button>
      </div>
    </div>
  )
}