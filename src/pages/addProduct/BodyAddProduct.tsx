import { useContext, useState } from "react";

import { DynamicTypeParameters } from "../../components/DynamicTypeParameters/DynamicTypeParameters";
import { IMyContext, MyContext } from "../../context/MyContext";

export function BodyAddProduct() {
  const {sku, name, price, setName, setPrice, setSku} = useContext(MyContext) as IMyContext;

  const [selectValue, setSelectValue] = useState('');
  const [selectError, setSelectError] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event?.target?.value === 'none') {
      setSelectError('Select something to continue the form.');
      return;
    }

    setSelectValue(event.target.value);
  }

  return (
    <div className="sm:m-[20px] sm:p-[10px]">
      <form id="product_form" className="sm:flex sm:flex-col sm:m-[10px]">
        <input
          id="sku"
          className="sm:border-black sm:border-[1px] sm:p-[10px] sm:w-[300px] sm:mb-[10px]"
          placeholder="sku"
          name="Sku"
          value={sku}
          onChange={(e) => setSku(e?.target.value)}
        />

        <p>{sku}</p>

        <input
          id="name"
          className="sm:border-black sm:border-[1px] sm:p-[10px] sm:w-[300px] sm:mb-[10px]"
          placeholder="name"
          name="Name"
          value={name}
          onChange={(e) => setName(e?.target.value)}
        />

        <p>{name}</p>

        <input
          id="price"
          className="sm:border-black sm:border-[1px] sm:p-[10px] sm:w-[300px] sm:mb-[2px]"
          placeholder="Price"
          name="price"
          value={price === 0 ? '' : price}
          onChange={(e) => setPrice(Number(e?.target.value))}
        />

        <p className="sm:mb-[10px] sm:text-[12px] sm:text-[gray]">*No need to input currency.</p>

        <select
          id="productType"
          className="sm:bg-white sm:border-black sm:border-[1px] sm:p-[10px] sm:w-[300px]"
          name="select"
          onChange={handleChange}
          defaultValue={'select'}
        >
          <option value="select" disabled selected>Select an option</option>
          <option value="dvd">DVD</option>
          <option value="furniture" selected>Furniture</option>
          <option value="book">Book</option>
        </select>

        <p className="sm:mb-[10px] sm:text-[red] sm:text-[12px]">{selectError}</p>

        <DynamicTypeParameters selectValue={selectValue} />
      </form>
    </div>
  )
}