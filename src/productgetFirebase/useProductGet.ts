import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";

type UPLOADPRODUCT = {
  title: string;
  detail: string;
  price: number | null;
  quantity: number;
  imageUrl: string;
  id: string;
};

export const useProductGet = () => {
  const [product, setProduct] = useState<UPLOADPRODUCT[] | []>([]);

  const getdataqurey  = async () => {
    const querySnapshot = await getDocs(collection(db, "product"));

    const FBDATABASE = querySnapshot.docs;


    const dataDDB =  FBDATABASE.map((value) => {
      return value.data();
    });

    // @ts-ignore

    setProduct(dataDDB);
  };

  useEffect(() => {
    getdataqurey();
  }, []);

  return { product };
};
