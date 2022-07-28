import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import AddProducts from "./components/AddProducts";
import UpdateProducts from "./components/UpdateProducts";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import NavabrDemo from "./components/NavabrDemo";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>

          
        <Route element={<PrivateComponent/>} >
          <Route element={<Products/>} path="/" ></Route>
          <Route element={<AddProducts/>} path="/add" ></Route>
          <Route element={<UpdateProducts/>} path="/update/:id" ></Route>
          <Route element={<Logout/>} path="/logout" ></Route>
          <Route element={<Profile/>} path="/profile" ></Route>
        </Route>
          <Route element={<SignUp/>} path="/signUp" ></Route>
          <Route element={<Login/>} path="/login" ></Route>

        </Routes>
      </BrowserRouter>
      {/* <NavabrDemo/> */}
    </div>
  );
}

export default App;
