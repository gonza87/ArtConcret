import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDelete } from "react-icons/md";

function Cart() {
  const { cart, deleteCart, totalPrice, quantityInCart } =
    useContext(CartContext);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-8">
          <div className="contCartIzquierda">
            <h2>Carrito</h2>
            <hr />
            {cart.map((prod) => (
              <div key={prod.id} className="cartIzquierdaFlex">
                <>
                  <img className="imgCart" src={prod.image} alt="" />
                  <p>{prod.name}</p>

                  {/* <input
                    className="ms-2"
                    type="number"
                    id="inputCantidad"
                    name="inputCantidad"
                    style={{ width: "35px", height: "25px" }}
                  /> */}
                  <p>{prod.price}$</p>

                  <MdDelete size={22} color="#000000" />
                </>

                {/* <img
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

              <MdDelete size={22} color="#000000" /> */}
              </div>
            ))}
            <div className="text-center">
              <span className="btnAddCart" onClick={deleteCart}>
                Vaciar Carrito
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="contCartDerecha">
            <h2>Resumen de compra</h2>
            <hr />
            <div className="cartDerechaFlex">
              <div className="d-flex justify-content-between">
                <p>Productos({quantityInCart()})</p>
                <p>{totalPrice()}$</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Envio</p>
                <p>Gratis</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>{totalPrice()}$</p>
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
