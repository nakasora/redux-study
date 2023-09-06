import React from "react";
import { MinusIcon, PlusIcon } from "../HeroIcons";

const CartItem = ({ id, title, price, img, amount }) => {
  return (
    <article>
      <img src={img} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn">削除</button>
      </div>
      <div>
        <button className="amount-btn">
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;