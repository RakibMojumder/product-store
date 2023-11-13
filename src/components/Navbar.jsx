import { BsFillBagCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShowCart }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="py-3 border-b sticky top-0 backdrop-blur-md">
      <div className="w-[95%] mx-auto flex justify-between">
        <button
          onClick={handleNavigate}
          className="text-xl font-bold uppercase"
        >
          Product Store
        </button>
        <button onClick={() => setShowCart(true)} className="relative">
          {cart.length > 0 && (
            <span className="absolute -top-2 left-0 bg-black/90 text-white h-6 w-6 rounded-full flex justify-center items-center text-sm">
              {cart.length}
            </span>
          )}
          <BsFillBagCheckFill
            size={30}
            color="#F7471E"
            className="cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
