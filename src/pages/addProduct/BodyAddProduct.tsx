import { useContext, useState } from "react";

import { DynamicTypeParameters } from "../../components/DynamicTypeParameters/DynamicTypeParameters";
import { IMyContext, MyContext } from "../../context/MyContext";

export function BodyAddProduct() {
  const {sku, name, price, selectValue, setSelectValue, setName, setPrice, setSku} = useContext(MyContext) as IMyContext;

  const [selectError, setSelectError] = useState('');
  const [text, setText] = useState('');

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
          className="sm:border-black sm:border-[1px] sm:p-[10px] sm:w-[300px] sm:mb-[5px]"
          placeholder="sku"
          name="Sku"
          value={sku}
          onChange={(e) => setSku(e?.target.value)}
        />

        {
          sku?.length !== 0 && <p className="sm:text-[red] sm:mb-[10px] sm:text-[12px]">{sku?.length < 3 && '*Should have more then 3 characters.'}</p>
        }

        <input
          id="name"
          className="sm:border-black sm:border-[1px] sm:p-[10px] sm:w-[300px] sm:mb-[5px]"
          placeholder="name"
          name="Name"
          value={name}
          onChange={(e) => setName(e?.target.value)}
        />

        {
          name?.length !== 0 && <p className="sm:text-[red] sm:mb-[5px] sm:text-[12px]">{name?.length < 3 && '*Should have more then 3 characters.'}</p>
        }

        <input
          id="price"
          className="sm:border-black sm:border-[1px] sm:p-[10px] sm:w-[300px] sm:mb-[5px]"
          placeholder="Price"
          type="number"
          name="price"
          value={price === 0 ? '' : price}
          onChange={(e) => setPrice(Number(e?.target.value))}
          onFocus={() => !price && setText('*Should fill in the fild above.')}
          onBlur={() => setText('')}
        />

        {
          <p className="sm:text-[red] sm:mb-[5px] sm:text-[12px]">{price === 0 && text}</p>
        }

        <p className="sm:mb-[10px] sm:text-[12px] sm:text-[gray]">*No need to input currency.</p>

        <select
          id="productType"
          className="sm:bg-white sm:border-black sm:border-[1px] sm:p-[10px] sm:w-[300px]"
          name="select"
          onChange={handleChange}
          defaultValue={'select'}
        >
          <option value="select" disabled>Select an option</option>
          <option value="dvd">DVD</option>
          <option value="furniture">Furniture</option>
          <option value="book">Book</option>
        </select>

        <p className="sm:mb-[10px] sm:text-[red] sm:text-[12px]">{selectError}</p>

        <DynamicTypeParameters selectValue={selectValue} />
      </form>
    </div>
  )
}