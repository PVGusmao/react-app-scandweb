import { BodyAddProduct } from "./BodyAddProduct";
import { HeaderAddProduct } from "./HeaderAddProduct";

export function AddProduct() {
  return (
    <div className="sm:flex sm:flex-col sm:w-[1280px]">
      <HeaderAddProduct />

      <BodyAddProduct />
    </div>
  )
}