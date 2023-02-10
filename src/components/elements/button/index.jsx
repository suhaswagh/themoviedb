import React from "react";

import * as Styles from "./styles";

const Button = ({ children, ...otherProps }) => {
  return <Styles.Button {...otherProps}>{children}</Styles.Button>;
};

export default Button;
