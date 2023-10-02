import {
  Typography,
  Toolbar,
  AppBar,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
  const navigate = useNavigate();
  const userName = auth.currentUser?.displayName;
  const { login } = useContext(AuthContext);
  

  const clickHandle = () => {
    signOut(auth)
      .then(() => {

        if (sessionStorage.getItem("adminKey")) {
 console.log(sessionStorage.getItem("adminKey"));
 
          sessionStorage.removeItem("adminKey");
          navigate("/");
        } else {
          sessionStorage.removeItem("userKey");
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  // @ts-ignore

  return (
    <AppBar position="static">
      <Toolbar className="justify-between">
        <Box>
          <Link to="/">
            <Typography>logo</Typography>
          </Link>
        </Box>
        <Box className="flex gap-7">
          <Divider className=" bg-white" flexItem orientation="vertical" />

          {login &&
          auth.currentUser?.uid === sessionStorage.getItem("userKey") ? (
            <Box className="flex items-center gap-5">
              <Link to="/user">
                <IconButton>
                  <ShoppingCartIcon className="text-white" />
                  <span className="w-7 h-7 rounded-full bg-black text-white text-[20px] relative right-2 bottom-2">
                    {0}
                  </span>
                </IconButton>
              </Link>
              <Typography>{userName}</Typography>
              <Typography component={"button"} onClick={clickHandle}>
                Logout
              </Typography>
            </Box>
          ) : login &&
            auth.currentUser?.uid === sessionStorage.getItem("adminKey") ? (
            <Box className="flex items-center gap-5">
              <Typography>{userName}</Typography>
              <Typography component={"button"} onClick={clickHandle}>
                Logout
              </Typography>
            </Box>
          ) : (
            <Box className="flex gap-5">
              <Link to="/signup">
                <Typography> Signup</Typography>
              </Link>
              <Link to="/login">
                <Typography>login</Typography>
              </Link>
            </Box>
          )}

          <Divider className=" bg-white" flexItem orientation="vertical" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
