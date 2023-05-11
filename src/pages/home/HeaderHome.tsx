import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom"

import { IMyContext, MyContext } from "../../context/MyContext";

import axios from "axios";

export function HeaderHome() {
  const { data, setData, idCards } = useContext(MyContext) as IMyContext;

  const navigation = useNavigate();

  function massDelete() {
    axios.delete(`http://10.0.0.22:8080/removeproducts`, {data: { id: idCards}})
      .then((response) => console.log(response))
      .catch((e) => console.log(e.response))
      .finally(() => {
        const filteredData = data.filter((element) => !idCards.some((id) => id === element.id));
        setData(filteredData);
      })
  }

  useEffect(() => {
    // console.log(data);
  }, [idCards])
  
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
          onClick={() => {
            massDelete();
          }}
        >Mass Delete</button>
      </div>
    </div>
  )
}