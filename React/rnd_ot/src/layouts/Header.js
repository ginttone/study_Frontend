import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <React.Fragment>
      <header>
        <h1>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              props.onChangeMode();
            }}
          >
            {props.title}
          </a>   
        </h1>
      </header>
    </React.Fragment>
  );
}
