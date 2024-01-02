import { lazy } from "react";
import { Navigate } from "react-router-dom";
import React from "react";

/** React.lazy
 * 컴포넌트를 동적으로 불러오기 위해 사용한다.
 * 동적 가져오기를 사용해 구성요소 수준에서 React 애플리케이션을 쉽게 코드 분할 할 수 있다.
 */

/**** Layouts ****/
const Fulllayout = lazy(() => import("./layouts/Main.js"));

/**** Pages ****/
const Header = lazy(() => import("./layouts/Header.js"));
const Sidebar = lazy(() => import("./layouts/Sidebar.js"));

const Router = [
  {
    path: "/",
    element: <Fulllayout />,
    children: [
      { path: "/", element: <Navigate to="/Main" /> },
      { path: "/header", exact: true, element: <Navigate to="/header" /> },
      { path: "/sidebar", exact: true, element: <Navigate to="/sidebar" /> },
    ],
  },
];

export default Router;
