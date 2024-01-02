import React from "react";
import { useRoutes } from "react-router-dom";
import routes from './Router';

export default function App() {

  const routing = useRoutes(routes);
  return (
    <React.Fragment>
      <div>{routing}</div>
    </React.Fragment>
  );
}
