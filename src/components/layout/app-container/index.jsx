import React from "react";

const AppContainer = ({ children, ...otherProps }) => {
  return (
    <div className="container" aria-label="App Container" {...otherProps}>
      {children}
    </div>
  );
};

export default AppContainer;
