import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
const SideBar = () => {
  return (
    <Box className="shadow-md h-screen p-5 flex flex-col gap-3">

      <Link   to={"/admin"}>
        <Typography variant="h6">DashBoard</Typography>
      </Link>
      <Link to={"/admin/productadd"}>
        <Typography variant="h6">Add Product Form</Typography>
      </Link>
      <Link to="/admin/table">
        <Typography variant="h6">Product Table</Typography>
      </Link>
    </Box>
  );
};

export default SideBar;
