import { useState } from "react";
import { Eye, EyeOff } from "react-feather";

import * as Styles from "./styles";

const Input = ({ error, value, type, ...otherProps }) => {
  const [passSHow, setPassSHow] = useState(false);

  const newType = type === "password" && passSHow ? "text" : type;

  return (
    <Styles.Container>
      <Styles.Wrapper error={error} valid={value !== "" && !error}>
        <Styles.InputHolder
          {...otherProps}
          value={value}
          type={newType}
          autoComplete="off"
        />
        {type === "password" && (
          <Styles.IconHolder onClick={() => setPassSHow(!passSHow)}>
            {passSHow ? <EyeOff /> : <Eye />}
          </Styles.IconHolder>
        )}
      </Styles.Wrapper>
      {error && <Styles.ErrorHolder>{error}</Styles.ErrorHolder>}
    </Styles.Container>
  );
};

export default Input;
