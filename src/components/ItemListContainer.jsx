import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import dataProducts from "../data/products.json";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataProducts);
      }, 1000);
    });
  };

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  console.log(products);

  return (
    <div className="container">
      <h2 className="text-center">Productos</h2>
      <div className=" containerListProducts">
        <ItemList />
      </div>
    </div>
  );
}

export default ItemListContainer;
