import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./RouteConstants";

const Login = lazy(() => import("../pages/login/Login.js"));
const Register = lazy(() => import("../pages/register/Register"));
const RestPassword = lazy(() =>
  import("../pages/restPassword/RestPassword.js")
);

const Routers = () => {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route exact path={ROUTES.LOGIN} element={<Login />} />
        <Route exact path={ROUTES.REGISTER} element={<Register />} />
        <Route exact path={ROUTES.REST_PASSWORD} element={<RestPassword />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
