import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemId } = useParams();
  let [product, setProduct] = useState();

  useEffect(() => {
    fetch("/data/products.json")
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data.find((prod) => prod.id === parseInt(itemId)));
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, [itemId]);
  console.log(product);
  return (
    <div className="container mt-5">
      <div className="row">
        {product ? <ItemDetail product={product} /> : "Cargando..."}
      </div>
    </div>
  );
}

export default ItemDetailContainer;
