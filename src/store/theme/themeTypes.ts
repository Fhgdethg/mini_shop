export interface IModeValues {
  basic: string;
}

export interface ITheme {
  mainBlue: string;
  mainGray: string;
  mainYellow: string;
  mainWhite: string;
  mainMediumRed: string;
  mainDarkRed: string;
  mainMediumGreen: string;
  mainDarkGreen: string;
  modeValues: IModeValues;
}

export type TThemeMode = 'light' | 'dark';
