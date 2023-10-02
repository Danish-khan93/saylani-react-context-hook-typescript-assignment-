import { Typography, Box, Button } from "@mui/material";
import { useProductGet } from "../productgetFirebase/useProductGet";
import { useParams } from "react-router-dom";

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
  const { product } = useProductGet();

  console.log(product, "danihs");
  console.log(id);
  const inProduct = product.find((value: UPLOADPRODUCT) => {
    return id == value.id
  });
  console.log(inProduct);
  // product.length
  return (
    //    {product.length !== 1 ?
    <div>hello</div>
    //     :

    //     <Box className="flex justify-around my-10">
    //       <Box className="w-[40%]">
    //         <Typography component={"img"} src={inProduct.imageUrl}></Typography>
    //       </Box>
    //       <Box className="w-[40%]">
    //         <Typography variant="h3">{inProduct.title}</Typography>
    //         <Typography variant="h6">{inProduct.detail}</Typography>
    //         <Typography variant="h3">{inProduct.price}$</Typography>
    //         <Button>Buy Now</Button>
    //       </Box>
    //     </Box>
    // }
  );
};

export default IndividualProduct;
