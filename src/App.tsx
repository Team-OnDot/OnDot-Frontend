import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<div>hello, react</div>
			</ThemeProvider>
		</>
	);
}

export default App;
