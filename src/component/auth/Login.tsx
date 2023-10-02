import { Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { LOGIN } from "../../types/signup";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
const Login = () => {
  const { register, handleSubmit, formState } = useForm<LOGIN>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const { errors } = formState;
  const onSubmit = (data: LOGIN) => {
    console.log("login", data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        if (user.email === "admin123@gmail.com") {
          sessionStorage.setItem("adminKey", user.uid);
          navigate("/admin");
        } else {
          sessionStorage.setItem("userKey", user.uid);
          navigate("/user");
        }
      })

      .catch((error) => console.log(error.message));
  };
  useEffect(() => {
    let signUpkeyUser = sessionStorage.getItem("userKey");
    let signUpkeyAdmin = sessionStorage.getItem("adminKey");
    if (signUpkeyUser) {
      navigate("/user");
    } else if (signUpkeyAdmin) {
      navigate("/admin");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <form
      noValidate
      className="flex flex-col gap-5 m-10 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        size="small"
        label="Email"
        {...register("email", {
          required: { value: true, message: "email field in required" },
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "incorrect email",
          },
        })}
        error={!errors}
        helperText={errors.email?.message}
      />
      <TextField
        size="small"
        type="password"
        label="Password"
        {...register("password", {
          required: { value: true, message: "password field in required" },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            message: "password is to week",
          },
        })}
        error={!errors}
        helperText={errors.password?.message}
      />

      <Typography>
        I'm already a member! <Link to="/signup"> Sign up</Link>
      </Typography>

      <Button
        type="submit"
        className="bg-blue-400 hover:bg-blue-400 text-white "
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
