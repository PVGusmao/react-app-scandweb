import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { IMyContext, MyContext } from "../../context/MyContext";
import axios from "axios";

export function HeaderAddProduct() {
  const {sku, name, price, attribute, selectValue, setSku, setName, setPrice, setAttribute, setSelectValue} = useContext(MyContext) as IMyContext;

  const navigation = useNavigate();

  function isAddButtonDisabled():boolean {
    if (sku?.length >= 3
      && name?.length >= 3
      && selectValue?.length > 0
      && Object.keys(attribute)?.length > 0
      ) {
        return false;
      }

    return true;
  }

  function mountBodyObject() {
    const obj = {
      sku,
      name,
      price: `${price}`,
      type: selectValue === 'dvd'
        ? 'size' : selectValue === 'book'
        ? 'weight'
        : 'dimensions',
      attribute: selectValue === 'dvd'
        ? `${attribute?.size} MB`
        : selectValue === 'book'
        ? `${attribute?.weight} KG`
        : `${attribute?.height}x${attribute?.width}x${attribute?.length} CM`,
    }

    axios
      .post('http://localhost:8080/create', obj)
      .then((response) => console.log(response))
      .catch((e) => console.log(e))

    setSku('');
    setName('');
    setPrice(0);
    setAttribute({});
    setSelectValue('');

    console.log(obj);

    return obj;
  }

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
            sm:active:shadow-none
            sm:cursor-pointer"
            disabled={isAddButtonDisabled()}
          type="button"
          onClick={() => {
            navigation('/');
            mountBodyObject();
          }}
        >Save</button>

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
            sm:active:shadow-none
            sm:cursor-pointer"
          type="button"
        >Cancel</button>
      </div>
    </div>
  )
}