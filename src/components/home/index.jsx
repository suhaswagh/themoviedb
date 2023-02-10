import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContainer from "./../layout/app-container";
import * as Actions from "../../pages/home/redux/actions";
import * as homeSelectors from "../../pages/home/redux/selectors";
import * as authSelectors from "../../pages/auth/redux/selectors";
import * as Selectors from "../../pages/home/redux/selectors";
import Translate from "../../utils/googleTranslate";
import MovieCard from "./card";
import * as Styles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(authSelectors.selectIsAuthenticated);
  const movieData = useSelector(homeSelectors.selectMovieData);
  const currentLang = useSelector(Selectors.selectCurrentLang);

  const [headingText, setHeadingText] = useState("Popular Movies");

  const handleText = useCallback(() => {
    Translate("Popular Movies", currentLang).then((res) =>
      setHeadingText(res[0].translatedText)
    );
  }, [currentLang]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(Actions.getMovieDB());
    }
    handleText();
  }, [dispatch, isAuthenticated, currentLang, handleText]);

  return (
    <Styles.Container>
      <Styles.TitleWrapper>
        <Styles.TitleHolder>{headingText}</Styles.TitleHolder>
      </Styles.TitleWrapper>
      <AppContainer>
        <Styles.Wrapper>
          {movieData?.map((movie, index) => {
            return <MovieCard key={movie.id || index} movie={movie} />;
          })}
        </Styles.Wrapper>
      </AppContainer>
    </Styles.Container>
  );
};

export default Home;
