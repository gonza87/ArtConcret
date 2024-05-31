import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
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
