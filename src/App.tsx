import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
//pages
import Header from './pages/header/Header';
import Login from './pages/login/Login';
import SignUpId from './pages/signUp/SignUpId';
import Home from './pages/home/Home';
import GroupProfile from './pages/groupProfile/GroupProfile';
import { RecoilRoot } from 'recoil';
import GroupProfileSetting from './pages/groupProfile/GroupProfileSetting';
import InterviewMake1 from './pages/interviewMake/InterviewMake1';
import InterviewMake2 from './pages/interviewMake/InterviewMake2';
import InterviewMake3 from './pages/interviewMake/InterviewMake3';
import InterviewMakeComplete from './pages/interviewMake/InterviewMakeComplete';
import Interview from './pages/interviewApply/InterviewApply';
import InterviewApplyMain from './pages/interviewApply/ApplyStart';
import InputInfo from './pages/interviewApply/ApplyInfo';
import InputTime from './pages/interviewApply/ApplyTime';
import ApplyComplete from './pages/interviewApply/ApplyComplete';
import InterviewEnd from './pages/interviewApply/InterviewEnd';
import InterviewYet from './pages/interviewApply/InterviewYet';
import EditInfo1 from './pages/interviewApply/EditInfo1';
import EditInfo2 from './pages/interviewApply/EditInfo2';

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
							<Route path="/group-profile" element={<GroupProfile />} />
							<Route path="/interview-make-1" element={<InterviewMake1 />} />
							<Route path="/interview-make-3" element={<InterviewMake3 />} />
							<Route path="/interview-make-complete" element={<InterviewMakeComplete />} />

								{/*면접 지원자 컴포넌트 */}
								<Route element={<Interview />}>
									<Route path="/interview-apply" element={<InterviewApplyMain />} />
									<Route path="/apply-info" element={<InputInfo />} />
									<Route path="/apply-time" element={<InputTime />} />
									<Route path="/apply-complete" element={<ApplyComplete />} />
									<Route path="/interview-end" element={<InterviewEnd />} />
									<Route path="/interview-yet" element={<InterviewYet />} />
									<Route path="/edit-info-check" element={<EditInfo1 />} />
									<Route path="/edit-info" element={<EditInfo2 />} />
								</Route>
							</Route>
							{/*헤더가 필요없는 컴포넌트 */}
						</Routes>
					</BrowserRouter>
				</RecoilRoot>
			</ThemeProvider>
		</>
	);
}

export default App;
