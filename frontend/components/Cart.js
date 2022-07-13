import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Quantity,
} from "../styles/CartStyle";
import { FaShoppingBag } from "react-icons/Fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/Ai";

export default function Cart() {
  const { cartItems } = useStateContext();
  return (
    <CartWrapper>
      <CartStyle>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>Cart is empty</h1>
            <FaShoppingBag />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                  <div>
                    <span>Quantity</span>
                    <button>
                      <AiFillMinusCircle />
                    </button>
                    <p>{item.quantity}</p>
                    <button>
                      <AiFillPlusCircle />
                    </button>
                  </div>
                </CardInfo>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
}
