import { numberWithCommas } from "../utils/numbersWithComms";

const OrderSummery = ({ total, totalWithComma }) => {
  return (
    <div className="w-full md:flex-1 p-4 shadow-lg sticky top-20">
      <h1 className="pb-0.5 border-b border-primary/20 text-xl font-semibold">
        Order Summery
      </h1>
      <h5 className="font-semibold my-2">Bill Details</h5>
      <div className="space-y-3 mb-8">
        <div className="flex justify-between font-medium">
          <p>Cart Sub Total:</p>
          <span>৳ {totalWithComma}</span>
        </div>
        <div className="flex justify-between font-medium">
          <p>Shipping Charge:</p>
          <span>৳ 150</span>
        </div>
        <div className="flex justify-between font-medium border-t">
          <p>Total Amount</p>
          <span>৳ {numberWithCommas(total + 150)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
