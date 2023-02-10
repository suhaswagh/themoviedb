import { color, font, element } from "./variables";
import { media } from "./mediaQuery";

const getTheme = () => {
  return { color, font, element, media };
};

export default getTheme;
