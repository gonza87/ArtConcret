function Cart() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-8">
          <div className="contCartIzquierda">
            <h2>Carrito</h2>
            <hr />
            <div className="cartIzquierdaFlex">
              <img
                className="imgCart"
                src=".././img/caritanordica.png"
                alt=""
              />
              <p>Maceta Carita Nordica</p>

              <input
                className="ms-2"
                type="number"
                id="inputCantidad"
                name="inputCantidad"
                style={{ width: "35px", height: "25px" }}
              />
              <p>350$</p>
              <p>eliminar</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="contCartDerecha">
            <h2>Resumen de compra</h2>
            <hr />
            <div className="cartDerechaFlex">
              <div className="d-flex justify-content-between">
                <p>Productos(2)</p>
                <p>1200$</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Envio</p>
                <p>Gratis</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>3252$</p>
              </div>
              <div className="text-center">
                <span className="btnAddCart">Continuar Compra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
