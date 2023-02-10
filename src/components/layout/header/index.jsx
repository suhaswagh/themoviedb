import { useState } from "react";
import AppContainer from "../app-container";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../pages/auth/redux/actions";
import * as homeActions from "../../../pages/home/redux/actions";
import * as Selectors from "../../../pages/home/redux/selectors";
import * as authSelectors from "../../../pages/auth/redux/selectors";
import { Video, Globe, LogOut } from "react-feather";
import * as Styles from "./styles";

const Header = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector(Selectors.selectCurrentLang);
  const isAuthenticated = useSelector(authSelectors.selectIsAuthenticated);

  const [langDrop, setLangDrop] = useState(false);

  const langs = [
    {
      name: "English",
      code: "en",
    },
    {
      name: "Arabic",
      code: "ar-sa",
    },
  ];

  const handleLangDrop = () => {
    setLangDrop(!langDrop);
  };

  return (
    <Styles.Container>
      <AppContainer>
        <Styles.Wrapper>
          <Styles.LogoContainer>
            <Styles.LogoIconHolder>
              <Video />
            </Styles.LogoIconHolder>
            <Styles.LogoTextHolder>TMDB</Styles.LogoTextHolder>
          </Styles.LogoContainer>
          <Styles.ActionCOntainer>
            <Styles.LangHolder>
              <Styles.LangWrapper onClick={() => handleLangDrop()}>
                <Styles.TextHolder upper>{currentLang}</Styles.TextHolder>
                <Styles.IconHolder>
                  <Globe />
                </Styles.IconHolder>
              </Styles.LangWrapper>
              {langDrop && (
                <Styles.DropdownContainer>
                  {langs?.map((item, index) => {
                    const active = currentLang === item.code;
                    return (
                      <Styles.ItemHolder
                        key={index}
                        active={active}
                        onClick={() =>
                          dispatch(homeActions.setLanguage(item.code))
                        }
                      >
                        <Styles.TextHolder>{item.code}</Styles.TextHolder>
                        {" - "}
                        <Styles.TextHolder upper>{item.name}</Styles.TextHolder>
                      </Styles.ItemHolder>
                    );
                  })}
                </Styles.DropdownContainer>
              )}
            </Styles.LangHolder>
            {isAuthenticated && (
              <Styles.IconHolder onClick={() => dispatch(Actions.setLogout())}>
                <LogOut />
              </Styles.IconHolder>
            )}
          </Styles.ActionCOntainer>
        </Styles.Wrapper>
      </AppContainer>
    </Styles.Container>
  );
};

export default Header;
