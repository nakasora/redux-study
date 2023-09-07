import { useEffect } from "react";
import "./App.css";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import cartItems from "./cartItems";
import { useSelector, useDispatch } from "react-redux";
import { caluculateTotals } from "./features/cart/CartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(caluculateTotals());
  }, [cartItems]);
  return (
    <>
      <main>
        <Modal />
        <Navbar />
        <CartContainer />
      </main>
    </>
  );
}

export default App;
