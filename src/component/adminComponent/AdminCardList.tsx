import { Box } from "@mui/material";
import AdminCard from "../../component/adminComponent/AdminCard";
import { adminData } from "../../AdminDynamicData/adminData";
import { INNERDATAADMIN } from "../../types/ADMINDATA";

const AdminCardList = () => {
  const cards = adminData.map((value: INNERDATAADMIN, index) => {
    return <AdminCard key={index} data={value} />;
  });
  return (
    <>
      <Box className="flex justify-around gap-2 my-10 mx-10 w-[800px]">
        {cards}
      </Box>
    </>
  );
};

export default AdminCardList;
