import {Stack,Box,Typography} from "@mui/material"
import login from "../../assets/login.webp";
import SignUp from "../../component/auth/SignUp";
const SignUpPage = () => {
  return (
    <Stack direction={"row"} className="flex justify-between items-center">
    <Box>
      <SignUp/>
    </Box>
    <Box className="bg-blue-200 py-14">
      <Typography component={"img"} src={login}></Typography>
    </Box>
  </Stack>
);
  
}

export default SignUpPage