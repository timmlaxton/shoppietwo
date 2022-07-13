import Link from "next/link";
import { FaShoppingBag } from "react-icons/Fa";
import { NavStyles, NavItems } from "../styles/NavStyle";
import Cart from "./Cart";

export default function Nav() {
  return (
    <NavStyles>
      <Link href={"/"}>Styled.</Link>
      <NavItems>
        <div>
          <FaShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <Cart />
    </NavStyles>
  );
}
