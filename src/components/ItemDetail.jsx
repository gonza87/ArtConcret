function ItemDetail() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            className="imgItemDetail"
            src=".././img/caritanordica.png"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h1>Maceta Carita Nordica</h1>
          <p>500 $</p>
          <p>DISPONIBILIDAD: 4 DISPONIBLES</p>

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
          <p>
            Detalles del producto. Es el lugar ideal para agregar más
            información sobre tu producto como su tamaño, materiales
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
