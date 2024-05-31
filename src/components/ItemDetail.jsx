function ItemDetail({ product }) {
  return (
    <>
      <div className="col-md-6">
        <img className="imgItemDetail" src={product.image} alt="" />
      </div>
      <div className="col-md-6">
        <h1>{product.name}</h1>
        <p>{product.price} $</p>
        <p>DISPONIBILIDAD: {product.stock} DISPONIBLES</p>

        <label for="inputCantidad">Cantidad</label>
        <input
          className="ms-2"
          type="number"
          id="inputCantidad"
          name="inputCantidad"
          style={{ width: "60px" }}
        />
        <div className="mt-2">
          <span className="btnAddCart">AÑADIR AL CARRITO</span>
        </div>

        <hr />
        <p>Descripcion</p>
        <p>{product.description}</p>
        <hr />
      </div>
    </>
  );
}

export default ItemDetail;
