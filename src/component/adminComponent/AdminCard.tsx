import { Typography, Paper } from "@mui/material";
import {INNERDATAADMIN} from "../../types/ADMINDATA"
const AdminCard = ({data}:{data:INNERDATAADMIN}) => {
  return (
    <Paper className={`${data.bgColor} text-white p-2 w-[200px] h-[70px]`}>
      <Typography>{data.title}</Typography>
      <Typography>{data.quantity}</Typography>
    </Paper>
  );
};

export default AdminCard;
