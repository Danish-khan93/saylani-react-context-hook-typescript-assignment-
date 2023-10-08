import { Typography, Box, Button } from "@mui/material";
import { useProductGet } from "../productgetFirebase/useProductGet";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
type UPLOADPRODUCT = {
  title: string;
  detail: string;
  price: number | null;
  quantity: number;
  imageUrl: string;
  id: string;
};

const IndividualProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  // @ts-ignore
  const { count, setCount } = useContext(CartContext);
  const { productPath, setProductPath } = useContext(ProductContext);
  const clickHandel = () => {
    if (login) {
      setCount(count + 1);

      setProductPath([...productPath,inProduct]);
      console.log(count, "count");
      console.log(productPath);
      

      navigate("/");
      // console.log(" login");
    } else {
      navigate("/signup");
      // console.log("not  login");
    }
  };

  const { product } = useProductGet();

  // console.log(product, "danihs");
  // console.log(id);
  const inProduct = product.find((value: UPLOADPRODUCT) => {
    return id == value.id;
  });
  if (inProduct) {
    return (
      <Box className="flex justify-around my-10">
        <Box className="w-[40%]">
          <Typography component={"img"} src={inProduct.imageUrl}></Typography>
        </Box>
        <Box className="w-[40%]">
          <Typography gutterBottom variant="h3">
            {inProduct.title}
          </Typography>
          <Typography gutterBottom variant="h6">
            {inProduct.detail}
          </Typography>
          <Typography gutterBottom variant="h4">
            {inProduct.price}$
          </Typography>
          <Typography gutterBottom variant="h6">
            available in stock {inProduct.quantity}{" "}
          </Typography>
          <Button
            className="bg-blue-400 hover:bg-blue-400 text-white"
            onClick={clickHandel}
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    );
  } else {
    return <div>loading...</div>;
    // console.log("No matching element found.");
  }
};

export default IndividualProduct;
