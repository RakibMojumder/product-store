import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import { toast } from "react-hot-toast";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to the cart");
  };

  return (
    <div className="border">
      <img src={product.image} alt="product image" className="h-56 w-full" />
      <div className="p-2">
        <div className="font-semibold h-20">{product.name}</div>
        <h3 className="text-2xl font-bold">${product.price}</h3>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full py-2 bg-black/90 text-white mt-2"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
