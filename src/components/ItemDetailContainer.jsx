import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function ItemDetailContainer() {
  const { itemId } = useParams();
  let [product, setProduct] = useState();

  useEffect(() => {
    const docRef = doc(db, "products", itemId);
    getDoc(docRef).then((res) => {
      if (res.data()) {
        setProduct({ ...res.data(), id: res.id });
      }
    });
  }, [itemId]);
  console.log(product);
  return (
    <div className="container mt-5">
      <div className="row">
        {product ? (
          <ItemDetail product={product} />
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
}

export default ItemDetailContainer;
