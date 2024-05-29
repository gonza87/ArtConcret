import ItemList from "./ItemList";

function ItemListContainer() {
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
