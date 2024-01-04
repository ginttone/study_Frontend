/** Router.js
 * 각 path에 맞는 element 를 매칭해서 내보내는 역할을 한다.
 * 각 페이지에서 보여줄 path와 element, 중첩라우팅을 위한 children을 적는다.
 * 형태는 배열안에 담긴 객체 형태로 export 한다.
 */
import React from "react";
import { createBrowserRouter , Navigate} from "react-router-dom";
/* 최상위 컴포넌트 import */
import App from "./App";
/* 라우팅 하고싶은 각각의 페이지 import */
import Notfound from "./layouts/Main";
import Dashboard from "./views/Dashboard";
import Application from "./views/Application";

/**  */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/applicartion", element: <Application /> },
    ],
  },
]);

export default router;