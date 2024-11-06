import React from "react";
import Logo from "./Logo"

const ErrorComponent = ({message}) => {
  return (
    <div>
      <Logo />
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorComponent;
