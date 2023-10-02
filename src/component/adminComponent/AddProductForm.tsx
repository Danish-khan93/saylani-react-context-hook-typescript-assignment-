import { collection, addDoc } from "firebase/firestore";
import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
// type of product
type UPLOADPRODUCT = {
  title: string;
  detail: string;
  price: number | null;
  quantity: number ;
  imageUrl: string;
  id: string;
};

// reacthook form setup
const AddProductForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<UPLOADPRODUCT>({
    defaultValues: {
      title: "",
      detail: "",
      price: null,
      quantity: 0,
      imageUrl: "",
      id: "", 
    },
  });
  const { errors } = formState;
  //   firestore set up
  const onSubmit = async (data: UPLOADPRODUCT) => {
    try {
      const docRef = await addDoc(collection(db, "product"), data);
      console.log("Document written with ID: ", docRef.id);
      if (docRef.id) {
        

        navigate("/admin/table");
      } else {
        
        navigate("/admin/productadd");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Box className="mx-auto w-[500px] shadow ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex gap-5 flex-col w-[350px] mx-auto  p-10"
      >
        <TextField
          label="Product Title"
          {...register("title", {
            required: {
              value: true,
              message: "field ia reuird",
            },
            max: {
              value: 50,
              message: "the input length is exceeds ",
            },
            min: {
              value: 10,
              message: "the input length is minimum ",
            },
          })}
          error={!errors}
          helperText={errors.title?.message}
        />
        <TextField
          label="Product detail"
          {...register("detail", {
            required: {
              value: true,
              message: "field ia reuird",
            },
            max: {
              value: 50,
              message: "the input length is exceeds ",
            },
            min: {
              value: 10,
              message: "the input length is minimum ",
            },
          })}
          error={!errors}
          helperText={errors.title?.message}
        />
        <TextField
          type="number"
          label="product Price"
          {...register("price", {
            required: {
              value: true,
              message: "field ia reuird",
            },
          })}
          error={!errors}
          helperText={errors.price?.message}
        />
        <TextField
          type="number"
          label="product Quantity"
          {...register("quantity", {
            required: {
              value: true,
              message: "field ia reuird",
            },
          })}
          error={!errors}
          helperText={errors.quantity?.message}
        />
        <TextField
          label="image URL"
          {...register("imageUrl", {
            required: {
              value: true,
              message: "field ia reuird",
            },
          })}
          error={!errors}
          helperText={errors.imageUrl?.message}
        />
        <TextField
          label="product ID"
          {...register("id", {
            required: {
              value: true,
              message: "field ia reuird",
            },
          })}
          error={!errors}
          helperText={errors.id?.message}
        />
        <Button
          type="submit"
          className="bg-blue-400 hover:bg-blue-400 text-white"
        >
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default AddProductForm;
