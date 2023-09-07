import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/ModalSlice";
import { useState } from "react";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";

const CartContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector((state) => state.cart);

  const ITEMS_PER_PAGE = 4;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = cartItems.slice(indexOfFirstItem, indexOfLastItem);

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
      </header>
      <div>
        {currentItems.map((_item) => {
          return <CartItem key={_item.id} {..._item} />;
        })}
      </div>
      <FirstPageIcon />
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        前のページへ
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === Math.ceil(cartItems.length / ITEMS_PER_PAGE)}
      >
        次のページ
      </button>
      <LastPageIcon />
      <footer>
        <hr />
        <div className="cart-total">
          合計 <span>{total}円</span>
        </div>
        <button
          className="button clear-btn"
          onClick={() => dispatch(openModal())}
        >
          全削除
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
