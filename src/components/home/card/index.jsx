import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import * as Selectors from "../../../pages/home/redux/selectors";
import Translate from "../../../utils/googleTranslate";

import * as Styles from "./styles";

const MovieCard = ({ movie }) => {
  const currentLang = useSelector(Selectors.selectCurrentLang);

  const [movieName, setMovieName] = useState(movie?.title);

  const handleText = useCallback(() => {
    Translate(movie?.title, currentLang).then((res) =>
      setMovieName(res[0].translatedText)
    );
  }, [currentLang, movie?.title]);

  useEffect(() => {
    handleText();
  }, [currentLang, handleText]);

  return (
    <Styles.Container>
      <Styles.ImageContainer>
        <Styles.ImageHolder
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movieName}
        />
      </Styles.ImageContainer>
      <Styles.TextContainer>
        <Styles.TextHolder>{movieName}</Styles.TextHolder>
      </Styles.TextContainer>
    </Styles.Container>
  );
};

export default MovieCard;
