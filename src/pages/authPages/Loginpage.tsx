import { Stack, Box, Typography } from "@mui/material";
import login from "../../assets/login.webp";
import Login from "../../component/auth/Login";
const LoginPage = () => {
  return (
    <Stack direction={"row"} className="flex justify-between items-center">
      <Box>
        <Login />
      </Box>
      <Box className="bg-blue-200 p-14">
        <Typography component={"img"} src={login}></Typography>
      </Box>
    </Stack>
  );
};

export default LoginPage;
