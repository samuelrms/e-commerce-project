import {
  darkBackground,
  darkHeader,
  darkHeaderSecondary,
  eighthCardDark,
  fifthCardDark,
  firstCardDark,
  footerDark,
  fourthCardDark,
  ninthCardDark,
  searchDark,
  searchFocusDark,
  secondCardDark,
  seventhCardDark,
  sixthCardDark,
  tenthCardDark,
  tertiaryDark,
  textCardDark,
  textDark,
  textDarkSecondary,
  textGrayDark,
  thirdCardDark,
} from "./variableColors";

export const darkTheme = {
  name: "dark",
  colors: {
    header: darkHeader,
    header_secondary: darkHeaderSecondary,
    close_accessibility: "green",
    primary: darkBackground,
    tertiary: tertiaryDark,
    footer: footerDark,
    text: textDark,
    textSecondary: textDarkSecondary,
    textGray: textGrayDark,
    textCard: textCardDark,
    search: searchDark,
    searchFocus: searchFocusDark,
    cards: {
      0: firstCardDark,
      1: secondCardDark,
      2: thirdCardDark,
      3: fourthCardDark,
      4: fifthCardDark,
      5: sixthCardDark,
      6: seventhCardDark,
      7: eighthCardDark,
      8: ninthCardDark,
      9: tenthCardDark,
    },
  },
};
