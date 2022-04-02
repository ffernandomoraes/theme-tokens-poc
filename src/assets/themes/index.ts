import ITheme from 'interface/theme';

export { default as light } from './light';
export { default as dark } from './dark';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Theme extends ITheme {}
}
