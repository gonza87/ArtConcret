import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((resp) => resp.json())
      .then((data) => {
        if (categoryId) {
          setProducts(data.filter((prod) => prod.category.id === categoryId));
        } else {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, [categoryId]);

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
