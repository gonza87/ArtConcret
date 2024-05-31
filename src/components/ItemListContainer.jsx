import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Productos</h2>
      <div className=" containerListProducts">
        <ItemList products={products} />
      </div>
    </div>
  );
}

export default ItemListContainer;
