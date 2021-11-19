import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AddServices from "./components/AddServices/AddServices";
import Services from "./components/Services/Services";
import MyOrders from "./components/MyOrders/MyOrders";
import Booking from "./components/Booking/Booking";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


function App() {
  return (
    <div className="App">
    <AuthProvider>  
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
            </Route>
            
            <Route exact path="/services">
            <Services></Services>
          </Route>
          
          <PrivateRoute exact path="/myOrder">
            <MyOrders></MyOrders>
          </PrivateRoute>
         
             <PrivateRoute exact path="/booking/:serviceId">
            <Booking></Booking>
            </PrivateRoute> 

          <PrivateRoute exact path="/addServices">
            <AddServices></AddServices>
            </PrivateRoute>
            
          <PrivateRoute exact path="/adminDashboard">
            <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            
            <Route exact path="/login">
            <Login></Login>
            </Route>
            
            <Route exact path="/register">
            <Register> </Register>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    
      
    </div>
  );
}

export default App;
