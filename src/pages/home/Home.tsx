import { useContext, useEffect } from "react";
import { IMyContext, MyContext } from "../../context/MyContext";

import axios from "axios";

import { BodyHome } from "./BodyHome";
import { HeaderHome } from "./HeaderHome";
import { FooterHome } from "./FooterHome";

export interface IData {
  id: number,
  name: string,
  price: number,
  type: string,
  attribute: string,
  sku: string;
}

export function Home() {
  const { setData } = useContext(MyContext) as IMyContext;

  async function getAllProducts() {
    axios
      .get('http://localhost:8080/list')
      .then((data) => setData(data?.data))
      .catch((e) => console.log(e?.response?.data));
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <HeaderHome />

      <BodyHome />

      <FooterHome />
    </div>
  )
}