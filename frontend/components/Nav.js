import Link from "next/link";
import { FaShoppingBag } from "react-icons/Fa";
import { NavStyles, NavItems } from "../styles/NavStyle";

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
    </NavStyles>
  );
}
