import Header from "./component/Header";
import DashBoard from "./pages/adimn/DashBoard";
import LoginPage from "./pages/authPages/Loginpage";
import SignUpPage from "./pages/authPages/SignUpPage";
import UserHome from "./pages/user/UserHome";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserProtected from "./protectedRoutes/UserProtected";
import AdminProtected from "./protectedRoutes/AdminProtected";
import { useState, useEffect } from "react";
import { auth } from "../src/firebase";
import { AuthContext } from "./context/AuthContext";
import AddProductForm from "./component/adminComponent/AddProductForm";
import AdminCardList from "./component/adminComponent/AdminCardList";
import AdminTable from "./component/adminComponent/AdminTable";
import IndividualProduct from "./pages/IndividualProduct";
import { CartContext } from "./context/CartContext";
import { ProductContext } from "./context/ProductContext";

const App = () => {
  // auth context
  const [userauth, setUserAuth] = useState<any | null>(null);
  const [login, setLogIn] = useState(false);
  // auth context

  // cartcontext
  const [count, setCount] = useState<number>(0);
 // cartcontext
// productcontext
const [productPath, setProductPath] =useState<string[]>([])

// productcontext


  useEffect(() => {
    try {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUserAuth(user);

          setLogIn(true);
        } else {
          setUserAuth(null);

          setLogIn(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ login }}>
        <CartContext.Provider value={{ count, setCount }}>
          <ProductContext.Provider value={{productPath,setProductPath}}>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="product/:id" element={<IndividualProduct />} />

              <Route path="/signup" element={<SignUpPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route
                path="admin"
                element={
                  <AdminProtected userauth={userauth} Component={DashBoard} />
                }
              >
                <Route path="/admin" element={<AdminCardList />} />
                <Route path="/admin/productadd" element={<AddProductForm />} />
                <Route path="/admin/table" element={<AdminTable />} />
              </Route>
              <Route
                path="/user"
                element={
                  <UserProtected userauth={userauth} Component={UserHome} />
                }
              />
              <Route path="*" element={<p>not found</p>} />
            </Routes>
          </ProductContext.Provider>
        </CartContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default App;
