import { Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { SIGNUP } from "../../types/signup";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from "react";

const SignUp = () => {
  const { register, handleSubmit, formState } = useForm<SIGNUP>({
    defaultValues: {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const navigate = useNavigate();
  const { errors } = formState;
  const onSubmit = async (data: SIGNUP) => {
    if (data.password !== data.confirmPassword) {
      alert("password is not match");
    } else {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((res) => {
          const user = res.user;
          updateProfile(user, {
            displayName: data.firstName + " " + data.lastName,
          });
          if (user.email === "admin123@gmail.com") {
            sessionStorage.setItem("adminKey", user.uid);
            navigate("/admin");
          } else {
            sessionStorage.setItem("userKey", user.uid);

            navigate("/user");
          }
        })
        .catch((error) => console.log(error));
    }
  };

useEffect(()=>{
  let signUpkeyUser = sessionStorage.getItem("userKey");
    let signUpkeyAdmin = sessionStorage.getItem("adminKey");
    if (signUpkeyUser) {
      navigate("/user");
    } else if (signUpkeyAdmin) {
      navigate("/admin");
    } else {
      navigate("/signup");
    }
},[])

  return (
    <form
      noValidate
      className="flex flex-col gap-5 m-10 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        size="small"
        label="First Name"
        {...register("firstName", {
          required: { value: true, message: "first name field in required" },
        })}
        error={!errors}
        helperText={errors.firstName?.message}
      />
      <TextField
        size="small"
        label="Last Name"
        {...register("lastName", {
          required: { value: true, message: "last name field in required" },
        })}
        error={!errors}
        helperText={errors.lastName?.message}
      />
      <TextField
        size="small"
        label="Number"
        {...register("number", {
          required: { value: true, message: "number field in required" },
        })}
        error={!errors}
        helperText={errors.number?.message}
      />
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
      <TextField
        size="small"
        type="password"
        label="Conform Password"
        {...register("confirmPassword", {
          required: {
            value: true,
            message: "confirm Password field in required",
          },
        })}
        error={!errors}
        helperText={errors.confirmPassword?.message}
      />
      <Typography>
        I'm already a member! <Link to="/login"> Log in</Link>{" "}
      </Typography>

      <Button
        type="submit"
        className="bg-blue-400 hover:bg-blue-400 text-white "
      >
        Signup
      </Button>
    </form>
  );
};

export default SignUp;
