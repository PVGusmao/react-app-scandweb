import { useState } from "react";
import { DynamicTypeParameters } from "../../components/DynamicTypeParameters/DynamicTypeParameters";

export function BodyAddProduct() {
  const [selectValue, setSelectValue] = useState('');
  const [selectError, setSelectError] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event?.target?.value === 'none') {
      setSelectError('Select something to continue the form.');
      return;
    }
    console.log(event.target.value);
    setSelectValue(event.target.value);
  }

  return (
    <div className="sm:m-[20px] sm:p-[10px]">
      <form className="sm:flex sm:flex-col sm:m-[10px]" id="product_form">
        <input
          id="sku"
          className="sm:border-black sm:border-[1px] sm:p-[10px] sm:w-[300px] sm:mb-[10px]"
          placeholder="sku"
        />

        <input
          id="name"
          className="sm:border-black sm:border-[1px] sm:p-[10px] sm:w-[300px] sm:mb-[10px]"
          placeholder="name"
        />

        <input
          id="price"
          className="sm:border-black sm:border-[1px] sm:p-[10px] sm:w-[300px] sm:mb-[10px]"
          placeholder="price"
        />

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