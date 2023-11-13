import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Cart from "../components/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "../redux/features/cart/cartSlice";
import Cookies from "js-cookie";

const Home = () => {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    dispatch(
      setCart(Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [])
    );
  }, [dispatch]);

  return (
    <div className={`${showCart && "h-screen overflow-hidden"}`}>
      <Navbar setShowCart={setShowCart} />
      <div className="w-[95%] mx-auto pt-5 md:pt-10 pb-10 md:pb-32">
        <Outlet />
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
    </div>
  );
};

export default Home;
