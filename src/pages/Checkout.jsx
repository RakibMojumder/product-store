import { useSelector } from "react-redux";
import { numberWithCommas } from "../utils/numbersWithComms";
import OrderSummery from "../components/OrderSummery";
import ProductRow from "../components/ProductRow";

const Checkout = () => {
  let total = 0;
  const cart = useSelector((state) => state.cart.cart);
  cart?.forEach((product) => (total += product.quantity * product.price));
  const totalWithComma = numberWithCommas(total);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 items-start">
      {/* YOUR SHOPPING BAG */}
      <div className="w-full md:w-3/5 xl:w-[70%] overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-base">
                Product
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-base">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-base">
                Quantity
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-base">
                TotalPrice
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-base">
                Remove
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {cart?.map((product) => (
              <ProductRow key={product._id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
      {/* ORDER SUMMERY */}
      <OrderSummery total={total} totalWithComma={totalWithComma} />
    </div>
  );
};

export default Checkout;
