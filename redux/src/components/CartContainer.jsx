import React from "react";
import { useSelector } from "react-redux";
import cartItems from "../cartItems";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">何も入ってません</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
        <h4 className="empty-cart">何も入ってません</h4>
      </header>
      <div>
        {cartItems.map((_item) => {
          return <CartItem key={_item.id} {..._item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          合計 <span>{total}円</span>
        </div>
        <button className="button clear-btn">全削除</button>
      </footer>
    </section>
  );
};

export default CartContainer;
