import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global.styles";
import { useDispatch, useSelector } from "react-redux";
import * as Selectors from "./pages/auth/redux/selectors";
import * as Actions from "./pages/auth/redux/actions";
import getTheme from "./styles/theme";
import Header from "./components/layout/header";
import AppRouter from "./router";

function App() {
  const dispatch = useDispatch();
  const email = useSelector(Selectors.selectEmail);
  const password = useSelector(Selectors.selectPassword);
  const authenticated = useSelector(Selectors.selectIsAuthenticated);

  const theme = getTheme();

  useEffect(() => {
    dispatch(Actions.setAuthenticated(email !== "" && password !== ""));
  }, [dispatch, email, password, authenticated]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
