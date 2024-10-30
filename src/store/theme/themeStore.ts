import {
  action,
  extendObservable,
  makeAutoObservable,
  makeObservable,
  observable,
} from 'mobx';
import { lightMode } from '@/src/constants/lightMode';
import { IModeValues, ITheme, TThemeMode } from '@/src/store/theme/themeTypes';

class ThemeStore {
  public mode: TThemeMode = 'light';

  public theme: ITheme = {
    mainBlue: '#2196F3',
    mainGray: '#616161',
    mainYellow: '#e2f720',
    mainWhite: '#FFF',
    mainMediumRed: '#f09492',
    mainDarkRed: '#d13b38',
    mainMediumGreen: '#7fe070',
    mainDarkGreen: '#318c23',
    modeValues: lightMode,
  };

  constructor() {
    makeAutoObservable(this);
    this.changeThemeMode = this.changeThemeMode.bind(this);
  }

  changeThemeMode(newMode: TThemeMode, newModeObj: IModeValues) {
    this.mode = newMode;
    this.theme.modeValues = { ...newModeObj };
  }
}

export default new ThemeStore();
