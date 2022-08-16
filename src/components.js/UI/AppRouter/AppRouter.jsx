import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../../../context";
import About from "../../../pages/About";
import Error from "../../../pages/Error";
import Login from "../../../pages/Login";
import PostIdPage from "../../../pages/PostIdPage";
import Posts from "../../../pages/Posts";
import { privateRoutes, publicRoutes } from "../../../router";
import Loader from "../Loader/Loader";

function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth 
    ? <Routes>
        <Route path="/" element="" />
        {privateRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Posts />} />
      </Routes>
    : <Routes>
        <Route path="/" element="" />
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Login />} />
      </Routes>
    
  );
}

export default AppRouter;
