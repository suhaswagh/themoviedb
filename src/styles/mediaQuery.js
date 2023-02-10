export const screenConstant = {
  SmobileWidth: "332px",
  mobileWidth: "480px",
  midMobile: "600px",
  tabletWidth: "900px",
  desktopWidth: "1100px",
  LargeDesktopWidth: "1300px",
};

const { midMobile, desktopWidth } = screenConstant;

export const media = {
  desktop_down: `@media (max-width: calc(${desktopWidth} - 1px))`,
  mobile_down: `@media (max-width: ${midMobile})`,
};
