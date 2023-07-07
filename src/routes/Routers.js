import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./RouteConstants";

const Login = lazy(() => import("../pages/login/Login.js"));

const Routers = () => {
  return (
    <Routes>
      <Route exact path={ROUTES.LOGIN} element={<Login />} />
    </Routes>
  );
};

export default Routers;
