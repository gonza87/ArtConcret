import Item from "./Item";

function ItemList({ products }) {
  return (
    <>
      {products.length > 0 ? (
        products.map((product) => {
          return <Item key={product.id} product={product} />;
        })
      ) : (
        <p>Cargando productos...</p>
      )}
    </>
  );
}

export default ItemList;
