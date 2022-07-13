import { useStateContext } from "../lib/context";
import { CartWrapper, CartStyle } from "../styles/CartStyle";

export default function Cart() {
  const { cartItems } = useStateContext();
  return (
    <CartWrapper>
      <CartStyle>
        <div>
          <h1>Cart is empty</h1>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h3>title</h3>
            <h3>Price</h3>
          </div>
        </div>
      </CartStyle>
    </CartWrapper>
  );
}
