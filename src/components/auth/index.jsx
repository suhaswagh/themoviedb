import { useState, useEffect, useCallback } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../elements/input";
import Button from "../elements/button";
import Translate from "../../utils/googleTranslate";
import * as authSelectors from "../../pages/auth/redux/selectors";
import * as Selectors from "../../pages/home/redux/selectors";
import * as Actions from "../../pages/auth/redux/actions";
import { emailValidator, passwordValidator } from "../../utils/validator";

import * as Styles from "./styles";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentLang = useSelector(Selectors.selectCurrentLang);
  const isAuthenticated = useSelector(authSelectors.selectIsAuthenticated);

  const [loginText, setLoginText] = useState("Login");
  const [noteText, setNoteText] = useState("Use any Email & Password");
  const [buttonText, setButtonText] = useState("Submit");
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = value;

  const handleChange = (e) => {
    const name = e.target.name;
    const inputValue = e.target.value;
    const isEmail = name === "email";
    const isPass = name === "password";
    setValue({ ...value, [name]: inputValue });

    let err = {};

    if (isEmail && !emailValidator(inputValue).validate) {
      err["email"] = emailValidator(inputValue).msg;
      setIsValid(false);
    } else if (isPass && !passwordValidator(inputValue).validate) {
      err["password"] = passwordValidator(inputValue).msg;
      setIsValid(false);
    }

    setErrors(err);

    if (JSON.stringify(err) === "{}" && email !== "" && password !== "") {
      setIsValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      dispatch(Actions.setCredentials(email, password));
      dispatch(Actions.setAuthenticated(true));
      navigate("/");
    }
  };

  const handleText = useCallback(() => {
    Translate("Login", currentLang).then((res) =>
      setLoginText(res[0].translatedText)
    );
    Translate("Use any Email and Password", currentLang).then((res) =>
      setNoteText(res[0].translatedText)
    );
    Translate("Submit", currentLang).then((res) =>
      setButtonText(res[0].translatedText)
    );
  }, [currentLang]);

  useEffect(() => {
    handleText();
  }, [currentLang, handleText]);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.TextHolder name="login" heading bold>
          {loginText}
        </Styles.TextHolder>
        <Styles.TextHolder name="note" sub>
          {noteText}
        </Styles.TextHolder>
        <Styles.FormHolder onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
            error={errors.email}
            placeholder="Email"
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
            error={errors.password}
            placeholder="Password"
          />
          <Button id="submit-button" disabled={!isValid} gradient={isValid}>
            {buttonText}
          </Button>
        </Styles.FormHolder>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default Auth;
