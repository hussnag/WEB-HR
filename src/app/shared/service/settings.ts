export interface AppSettings {
  menuMode?: 'horizontal' | 'popup' | 'overlay' |'static';
  dir?: 'ltr' | 'rtl';
  language?: 'Eng';
  menuActive?: boolean;
  topbarMenuActive?: boolean;
}

export const defaults: AppSettings = {
  menuMode : 'horizontal',
  menuActive : true,
  topbarMenuActive: false
};
