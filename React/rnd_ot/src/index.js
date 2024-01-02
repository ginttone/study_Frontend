import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /** <BroserRouter>
   * 1. 새로고침 시 해당 RUL을 바탕으로 페이지를 새로이 불러온다. 
   * 2. <Link>를 통해 to 속성에 이동할 경로를 추가하여 이동한다.
   *    단순히 주소만 바꿔주며 컴포넌트를 렌더링하는 역할을 하기에 새로고침을 하게되면
   *    해당 페이지를 못찾아 에러가 발생한다. 
   * 3. HTML5 History API를 사용한다.
   * 4. 주로 동적인 페이지에서 사용한다. 
   */
  <BrowserRouter>
  {/* <Routes>는 여러 Route를 감싸 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜주는 역할을 한다. */}
    <Routes>
      {/* <Route>는 path 속성에 경로, element 속성에는 컴포넌트를 넣어준다. 
      여러 라우팅을 매칭하고 싶은 경우 URL뒤에 *를 사용하면 된다. */}
      <Route path="/RAP/*" element={<App/>}/>
      <Route path="*" element={<Navigate to="/RAP/Main" replace/>}/>
    </Routes>
  </BrowserRouter>
);