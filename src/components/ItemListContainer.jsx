import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [titleCategory, setTitleCategory] = useState("Productos");
  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = collection(db, "products");

    const q = categoryId
      ? query(productsRef, where("category.id", "==", categoryId))
      : productsRef;

    const categoriesRef = collection(db, "categories");

    let catQuery =
      categoryId && query(categoriesRef, where("id", "==", categoryId));

    getDocs(q).then((res) => {
      setProducts(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });

    if (catQuery) {
      getDocs(q).then((res) => {
        setTitleCategory(res.docs[0].data().category.nombre);
      });
    } else {
      setTitleCategory("Productos");
    }
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
