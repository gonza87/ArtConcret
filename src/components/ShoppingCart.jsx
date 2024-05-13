import { FaCartShopping } from "react-icons/fa6";

function ShoppingCart() {
  return (
    <>
      <div className="contCart">
        <FaCartShopping size={25} color="#F4F4F6" />
        <span className="numberCart">6</span>
      </div>
    </>
  );
}

export default ShoppingCart;
