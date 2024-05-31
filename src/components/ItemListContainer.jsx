import categories from "../.././public/data/categories.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [titleCategory, setTitleCategory] = useState("Productos");
  const { categoryId } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((resp) => resp.json())
      .then((data) => {
        if (categoryId) {
          setTitleCategory(
            categories.find((cat) => cat.id === categoryId).name
          );
          setProducts(data.filter((prod) => prod.category.id === categoryId));
        } else {
          setProducts(data);
          setTitleCategory("Productos");
        }
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, [categoryId]);

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-5">{titleCategory}</h2>
      <div className=" containerListProducts">
        <ItemList products={products} />
      </div>
    </div>
  );
}

export default ItemListContainer;
