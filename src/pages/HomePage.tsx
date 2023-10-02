import { Box, Typography } from "@mui/material";
import ProductCard from "../component/ProductCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
type UPLOADPRODUCT = {
  title: string;
  detail: string;
  price: number | null;
  quantity: number;
  imageUrl: string;
  id: string;
};

const HomePage = () => {
  const [productHomePage, setProductHomePage] = useState<any>([]);
  console.log(productHomePage);

  useEffect(() => {
    const getdataqurey = async () => {
      const querySnapshot = await getDocs(collection(db, "product"));

      const FBDATABASE = querySnapshot.docs;
      const dataDDB = FBDATABASE.map((value) => {
        return value.data();
      });
      // return dataDDB
      setProductHomePage(dataDDB);
    };

    getdataqurey();
  }, []);

  const listOfProduct = productHomePage.map((value: UPLOADPRODUCT) => {
    return (
      // `/product/${value.id}`
      <Link to={`/product/${value.id}`} key={value.id}>
        <ProductCard value={value} key={value.id} />;
      </Link>
    );
  });
  return (
    <div>
      <Box className="text-center my-10">
        <Typography variant="h3">Online Market Place</Typography>
      </Box>
      <Box className="flex justify-evenly my-5">{listOfProduct}</Box>
    </div>
  );
};

export default HomePage;
