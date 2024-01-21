// styled-components 타입 선언 파일
import 'styled-components';
import { ColorTypes } from './theme';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: ColorTypes;
	}
}
