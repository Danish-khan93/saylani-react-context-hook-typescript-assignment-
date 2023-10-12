import { Typography, Box, Button } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";

type UPLOADPRODUCT = {
  title: string;
  detail: string;
  price: number | null;
  quantity: number;
  imageUrl: string;
  id: string;
};

const UserHome = () => {
  const { productPath } = useContext(ProductContext);
  const { count, setCount } = useContext(CartContext);
  const incrementHandle = (val: number) => {
    if (count >= val) {
      setCount(val);
    } else {
      setCount(count + 1);
    }
  };
  const decrementHandle = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  console.log(productPath, "path");
  if (productPath) {
    return productPath.map((value: UPLOADPRODUCT) => {
      return (
        <Box key={value.id}>
          <Box className="bg-slate-400 flex items-center justify-between gap-6 my-10 mx-3 rounded p-10">
            <Box className="flex items-center gap-10">
              <Box>
                <Typography
                  className="w-[100px] h-[100px]"
                  component={"img"}
                  src={value.imageUrl}
                ></Typography>
              </Box>
              <Box>
                <Typography variant="h4" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {value.detail}
                </Typography>
                <Typography gutterBottom>
                  available stock {value.quantity - count} pies
                </Typography>
              </Box>
            </Box>

            <Box className="flex flex-col gap-10 items-center">
              <Box>Total price {count === 0 ? value.price : value.price * count}</Box>
              <Box className="flex gap-2 items-center">
                <Button
                  onClick={() => {
                    incrementHandle(value.quantity);
                  }}
                  className="bg-white hover:bg-white text-black w-[10px] h-[20px]"
                >
                  +
                </Button>
                <Box>{count}</Box>
                <Button
                  onClick={decrementHandle}
                  className="bg-white hover:bg-white text-black w-[10px] h-[20px]"
                >
                  -
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      );
    });
  } else {
    return <Box> loading....</Box>;
  }
};

export default UserHome;
