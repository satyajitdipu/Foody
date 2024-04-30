import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Subnav from "./Subnav";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("userg");
    console.log("mkmmjk",login)
    if (login) {
      console.log("bbbbb")
      navigate('/login');
    }
  });

  if (window.location.pathname === "/login" || window.location.pathname === "/cart"||window.location.pathname === "/Orderid") {
    return <Component />;
  }
  


  return (
    <div>
      <Subnav />
      <Component />
    </div>
  );
}

export default Protected;
