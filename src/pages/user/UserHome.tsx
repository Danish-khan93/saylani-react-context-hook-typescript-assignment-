import { Typography, Box } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

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
  console.log(productPath, "path");
  if (productPath) {
    return productPath.map((value: UPLOADPRODUCT) => {
      return (
        <Box>
          <Box className="bg-slate-400 flex items-center gap-6 my-10 mx-3 rounded p-10">
            <Box>
              <Typography
                className="w-[100px] h-[100px]"
                component={"img"}
                src={value.imageUrl}
              ></Typography>
            </Box>
            <Box>
              <Typography variant="h4" gutterBottom>{value.title}</Typography>
              <Typography variant="h6" gutterBottom>{value.detail}</Typography>
              <Typography gutterBottom>
                available stock {value.quantity} pies
              </Typography>
            </Box>
            <Box>
              
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
