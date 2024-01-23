import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Header from './pages/header/Header';
import Login from './pages/login/Login';
import SignUpId from './pages/signUp/SignUpId';
import Home from './pages/home/Home';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<BrowserRouter>
					<Routes>
						{/*헤더가 필요한 컴포넌트 */}
						<Route element={<Header />}>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/sign-up-id" element={<SignUpId />} />
						</Route>
						{/*헤더가 필요없는 컴포넌트 */}

					</Routes>  
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
}

export default App;
