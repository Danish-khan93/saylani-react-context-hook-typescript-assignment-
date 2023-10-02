// import { auth } from "../firebase";
// import { Navigate } from "react-router-dom";

// // @ts-ignore
// const Protected = ({ Component, uid }) => {
//   if (auth.currentUser?.email === "admin123@gmail.com") {
//     let key = sessionStorage.getItem("adminKey");
//     return <>{key ? <Component /> : <Navigate to="/signup" />}</>;
//   } else if (auth.currentUser?.email !== "admin123@gmail.com") {
//     const key = sessionStorage.getItem("userKey");
//     return <>{key ? <Component /> : <Navigate to="/signup" />}</>;
//   } else {
//     const key = sessionStorage.getItem("userKey");
//     return <>{key === uid ? <Component /> : <Navigate to="*" />}</>;
//   }
// };

// export default Protected;
