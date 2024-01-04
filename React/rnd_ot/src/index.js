import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from './Router.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  // {/** <Routes> **
  //  * 기존 react-router의 Swich가 V6에서는 이름이 Routes로 변경되었다.  
  //  * 여러개의 Route를 감싸는데 사용하고 현재 URL에 일치하는 첫번째 Route 또는 Redirect만 렌더링 한다. 
  //  * 즉, Route로 생성된 자식컴포넌트 중 매칭되는 첫번째 Route를 렌더링하여 화면에 노출시키기 때문에 Routes내의 Route순서가 중요하다.
  // */}
  //   <Routes>
  //     <Route path="/" element={<App/>} />  
  //     <Route path="*" element={<Navigate to="/main/tracking" replace/>} />
  //   </Routes>
  // </BrowserRouter>

  <RouterProvider router={router}/>
);
