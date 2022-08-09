import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      footer: string;
      text: string;
      textSecondary: string;
      textGray: string;
      textCard: string;
      search: string;
      searchFocus: string;
      cards: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
      };
    };
  }
}
