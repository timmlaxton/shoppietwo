import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
} from "../styles/CartStyle";
import { Quantity } from "../styles/ProductDetails";
import { FaShoppingBag } from "react-icons/Fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove } = useStateContext();

  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>Cart is empty</h1>
            <FaShoppingBag />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card key={item.slug}>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>£{item.price}</h3>
                  <Quantity>
                    <span>Quantity</span>
                    <button>
                      <AiFillMinusCircle onClick={() => onRemove(item)} />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => onAdd(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </Quantity>
                </CardInfo>
              </Card>
            );
          })}
        {cartItems.lenght >= 1 && (
          <div>
            <h3>Subtotal:</h3>
            <button>Purchase</button>
          </div>
        )}
      </CartStyle>
    </CartWrapper>
  );
}
