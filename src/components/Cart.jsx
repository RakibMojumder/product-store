import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxCross1, RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/features/cart/cartSlice";
import { numberWithCommas } from "../utils/numbersWithComms";
import { useNavigate } from "react-router-dom";
import ProductCounter from "./ProductCounter";
import { motion as m } from "framer-motion";

const Cart = ({ setShowCart }) => {
  let total = 0;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  cart?.forEach((product) => (total += product.quantity * product.price));

  const handleNavigate = () => {
    if (cart.length == 0) {
      return;
    }

    navigate("/checkout");
    setShowCart(false);
  };

  return (
    <div className="fixed top-0 right-0 h-full w-full bg-black/20 flex justify-end">
      <m.div
        initial={{ x: "100%" }}
        animate={{ x: 0, transition: { duration: 0.5 } }}
        exit={{ x: "100%", transition: { duration: 0.5 } }}
        className="w-full sm:w-2/3 xl:w-96 h-full bg-white flex flex-col justify-between"
      >
        <div className="text-lg text-black font-medium flex justify-between items-center p-4 border-b border-primary/30 uppercase">
          <h1 className="flex gap-x-2">
            Shopping Bag
            <LiaShoppingBagSolid size={25} />
          </h1>
          <RxCross1
            onClick={() => setShowCart(false)}
            size={30}
            className="cursor-pointer"
          />
        </div>

        {/*  CART */}
        <div className="flex-1 p-4 space-y-8 overflow-y-auto">
          {cart?.map((product) => (
            <div key={product.name} className="grid grid-cols-12 gap-4">
              <div className="col-span-3">
                <img
                  src={product.image}
                  alt="product image"
                  className="h-20 w-full"
                />
              </div>
              <div className="col-span-8 space-y-1">
                <h1 className="leading-none text-black">{product.name}</h1>
                <p className="text-black font-semibold">৳ {product.price}</p>

                {/* PRODUCT COUNT */}
                <ProductCounter product={product} />
              </div>

              <div className="col-span-1 text-slate-700">
                <RxCrossCircled
                  size={22}
                  className="cursor-pointer"
                  onClick={() => dispatch(removeFromCart(product))}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          onClick={handleNavigate}
          className="px-4 py-5 border-t border-primary/30"
        >
          <button className="w-full px-4 py-3 flex items-center justify-between gap-x-6 bg-black/90 text-white font-semibold">
            Checkout
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-lg font-semibold">
              ৳ {numberWithCommas(total)}
            </span>
          </button>
        </div>
      </m.div>
    </div>
  );
};

export default Cart;
