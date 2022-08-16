import React, { useEffect, useMemo, useRef, useState, Navigate } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components.js/UI/AppRouter/AppRouter";
import Navbar from "./components.js/UI/Navbar/Navbar";
import { AuthContext } from "./context";
import About from "./pages/About";
import Error from "./pages/Error";
import Posts from "./pages/Posts";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
