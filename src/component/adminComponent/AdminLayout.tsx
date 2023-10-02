import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import {Box} from "@mui/material"
const AdminLayout = () => {
  return (
    <>
      <Box className="flex justify-between">
        <SideBar />
        <Outlet />
      </Box>
    </>
  );
};

export default AdminLayout;
