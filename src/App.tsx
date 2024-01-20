import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header/header';
import Login from './pages/Login/login';


function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					{/*헤더가 필요한 컴포넌트 */}
					<Route element={<Header />}>
						<Route path="/login" element={<Login />} />
					</Route>
					{/*헤더가 필요없는 컴포넌트 */}

				</Routes>  
			</BrowserRouter>
		</>
	);
}

export default App;
