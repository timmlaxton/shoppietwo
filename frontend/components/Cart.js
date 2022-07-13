import { useStateContext } from "../lib/context";
import { CartWrapper, CartStyle, Card } from "../styles/CartStyle";

export default function Cart() {
  const { cartItems } = useStateContext();
  return (
    <CartWrapper>
      <CartStyle>
        {cartItems.length < 1 && (
          <div>
            <h1>Cart is empty</h1>
          </div>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <div>
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                </div>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
}
