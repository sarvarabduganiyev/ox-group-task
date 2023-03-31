import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { authLogOut } from "../redux/slices/auth";
import LOGO from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
function Layout({ children }) {
  const dispatch = useDispatch();
  const LogOutFunc = () => {
    dispatch(authLogOut());
  };
  return (
    <div>
      <div className="navbarMenu">
        <Link to={"/dashboard"}>
          <img src={LOGO} alt="logo" />
        </Link>
        <Button type="primary" onClick={LogOutFunc}>
          Log out
        </Button>
      </div>
      {children}
    </div>
  );
}

export default Layout;
