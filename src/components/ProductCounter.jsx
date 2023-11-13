import { useDispatch } from "react-redux";
import {
  decrementProduct,
  incrementProduct,
} from "../redux/features/cart/cartSlice";

const ProductCounter = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="inline-flex items-center text-neutral-600 h-7 border border-black bg-white divide-x-[1px] divide-black">
      <button
        onClick={() => dispatch(incrementProduct(product))}
        className="px-2 pb-1.5 h-full text-3xl flex justify-center items-center"
      >
        +
      </button>
      <span className="w-14 h-full flex justify-center items-center text-xl font-medium">
        {product.quantity}
      </span>
      <button
        onClick={() => dispatch(decrementProduct(product))}
        disabled={product.quantity <= 1}
        className="px-2 pb-1.5 h-full text-3xl disabled:cursor-not-allowed flex justify-center items-center"
      >
        -
      </button>
    </div>
  );
};

export default ProductCounter;
