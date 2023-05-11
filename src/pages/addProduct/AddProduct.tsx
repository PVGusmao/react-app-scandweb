import { useState } from "react";
import { BodyAddProduct } from "./BodyAddProduct";
import { HeaderAddProduct } from "./HeaderAddProduct";

export function AddProduct() {
  const [error, setError] = useState('');

  return (
    <div className="sm:flex sm:flex-col sm:w-[1280px]">
      <HeaderAddProduct error={error} setError={setError} />

      <BodyAddProduct error={error} />
    </div>
  )
}