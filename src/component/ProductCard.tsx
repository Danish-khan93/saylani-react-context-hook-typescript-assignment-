import { Typography, Paper, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
type UPLOADPRODUCT = {
  title: string;
  detail: string;
  price: number | null;
  quantity: number;
  imageUrl: string;
  id: string;
};

const ProductCard = ({ value }: { value: UPLOADPRODUCT }) => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const clickHandle = () => 
  {
if(login){
  navigate("/");

}else{

  navigate("/signup");
}
  }

  return (
    <Paper
      key={value.id}
      className="w-[300px] h-[400px] flex flex-col items-center rounded-lg "
    >
      <Box className="w-[250px] h-[250px] mt-3 rounded-lg shadow-md ">
        <Typography
          className="w-[250px] h-[250px] rounded-lg"
          component={"img"}
          src={value.imageUrl}
        ></Typography>
      </Box>
      <Box className="w-[250px] h-[250px] flex flex-col items-start">
        <Box className="m-5">
          <Typography variant="h5">{value.title}</Typography>
        </Box>
        <Box className="m-5 flex gap-8">
          <Typography variant="h6">{value.price}$</Typography>

          <Button
            onClick={clickHandle}
            endIcon={<ShoppingCartIcon />}
            className="bg-blue-400 hover:bg-blue-400 text-white"
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductCard;
