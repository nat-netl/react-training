import React, { useContext } from "react";
import MyButton from "../components.js/UI/button/MyButton";
import MyInput from "../components.js/UI/input/MyInput";
import { AuthContext } from "../context";

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const submit = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={submit}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}

export default Login;
