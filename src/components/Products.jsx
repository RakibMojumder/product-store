import { useGetProductsQuery } from "../redux/features/product/productApi";
import Loader from "./Loader";
import Product from "./Product";

const Products = () => {
  const { isLoading, data } = useGetProductsQuery();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {isLoading && [...Array(10)].map((_, index) => <Loader key={index} />)}
      {data?.data?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
