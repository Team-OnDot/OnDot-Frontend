import { DefaultTheme } from 'styled-components';

const colors = {
	black: '#000000',
	white: '#ffffff',
	gray1: '#303030',
	gray2: '#606060',
	gray3: '#757575',
	gray4: '#959595',
	gray5: '#C8C8C8',
	gray6: '#DFDFDF',
	gray7: '#EFEFF1',
	gray8: '#F1F1F2',
	gray9: '#FBFBFB',
	gray10: '#FDFDFD',
	red1: '#ff4a4a',
	red2: '#FFCCCC',
	red3: '#F9E2E2',
	red4: '#FFF2F2',
};

export type ColorTypes = typeof colors;

export const theme: DefaultTheme = {
	colors,
};
