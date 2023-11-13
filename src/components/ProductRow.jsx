import ProductCounter from "./ProductCounter";
import { numberWithCommas } from "../utils/numbersWithComms";
import { RxCrossCircled } from "react-icons/rx";
import { removeFromCart } from "../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductRow = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <tr key={product._id}>
      <td className="whitespace-nowrap flex items-center text-lg font-medium gap-x-5">
        <img
          src={product.image}
          alt="product image"
          className="h-12 md:h-16 lg:h-20"
        />
        <h3 className="text-base">{product.name.slice(0, 30)}</h3>
      </td>
      <td className="whitespace-nowrap px-4 text-center font-semibold">
        {product.price}
      </td>
      <td className="px-10 text-center">
        <ProductCounter product={product} />
      </td>
      <td className="whitespace-nowrap px-4 text-center font-semibold">
        {numberWithCommas(product.quantity * product.price)}
      </td>

      <td className="whitespace-nowrap px-4 text-center font-semibold">
        <RxCrossCircled
          size={22}
          className="cursor-pointer"
          onClick={() => dispatch(removeFromCart(product))}
        />
      </td>
    </tr>
  );
};

export default ProductRow;
