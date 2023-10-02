
import { Navigate } from "react-router-dom";

// @ts-ignore
const Protected = ({ Component, userauth }) => {
    let key = sessionStorage.getItem("adminKey");
    if(key){
        return <Component/>
    }else{
        return <Navigate to="/signup"/>
    }

};

export default Protected;
