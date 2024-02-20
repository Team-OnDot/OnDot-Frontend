import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { RecoilRoot } from 'recoil';
//pages
import Header from './components/header/Header';
import Login from './pages/login/Login';
import SignUpId from './pages/signUp/SignUpId';
import Home from './pages/home/Home';
import GroupProfileMain from './pages/groupProfile/GroupProfileMain';
import GroupProfileSetting from './pages/groupProfile/setting/GroupProfileSetting';
import InterviewMake1 from './pages/interviewMake/InterviewMake1';
import InterviewMake2 from './pages/interviewMake/InterviewMake2';
import InterviewMake3 from './pages/interviewMake/InterviewMake3';
import InterviewMakeComplete from './pages/interviewMake/InterviewMakeComplete';
import InterviewApply from './components/interviewApply/InterviewApply';
import InterviewApplyMain from './pages/interviewApply/InterviewApplyMain';
import InterviewApplyInputInfo from './pages/interviewApply/inputInfo/InterviewApplyInputInfo';
import InterviewApplyInputSchedule from './pages/interviewApply/inputSchedule/InterviewApplyInputSchedule';
import InterviewApplyComplete from './pages/interviewApply/complete/InterviewApplyComplete';
import InterviewApplyEnd from './pages/interviewApply/end/InterviewApplyEnd';
import InterviewApplyYet from './pages/interviewApply/yet/InterviewApplyYet';
import InterviewApplyEditInfoCheck from './pages/interviewApply/editInfo/check/InterviewApplyEditInfoCheck';
import InterviewApplyEditInfo from './pages/interviewApply/editInfo/InterviewApplyEditInfo';
import LoginLoading from './pages/login/LoginLoading';
import TimeTableProgress from './pages/interviewTimetable/progress/TimeTableProgress';
import TimeTableView3 from './pages/timeTableDown/TimeTableView3';
import GroupProfile from './components/groupProfile/GroupProfile';
import SignUpGoogle from './pages/signUp/SignUpGoogle';
//findAccount
import FindId1 from './pages/findAccount/findId/FindId1';
import FindPw1 from './pages/findAccount/findPassword/FindPw1'
import FindPw2 from './pages/findAccount/findPassword/FindPw2'

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<RecoilRoot>
					<BrowserRouter>
						<Routes>
							{/*헤더가 필요한 페이지 */}
							<Route element={<Header />}>
								<Route path="/" element={<Home />} />
								<Route path="/login" element={<Login />} />
								<Route path="/sign-up-id" element={<SignUpId />} />
								<Route path="/sign-up-google" element={<SignUpGoogle />} />
								<Route path="/group-profile" element={<GroupProfile />} />
								<Route path="/group-profile-setting" element={<GroupProfileSetting />} />
								<Route path="/interview-make-1" element={<InterviewMake1 />} />
								<Route path="/interview-make-2" element={<InterviewMake2 />} />
								<Route path="/interview-make-3" element={<InterviewMake3 />} />
								<Route path="/interview-make-complete" element={<InterviewMakeComplete />} />
								<Route path="/timetable-view3" element={<TimeTableView3 />} />
								<Route path="/find-id-1" element={<FindId1/>}/>
								<Route path="/find-password-1" element={<FindPw1/>}/>
								<Route path="/find-password-2" element={<FindPw2/>}/>
								{/* 그룹 페이지 */}
								<Route element={<GroupProfile />}>
									<Route path="/group-profile" element={<GroupProfileMain />} />
									<Route path="/timetable-progress" element={<TimeTableProgress />} />
								</Route>
								{/* 면접 지원자 페이지 */}
								<Route element={<InterviewApply />}>
									<Route path="/interview-apply" element={<InterviewApplyMain />} />
									<Route path="/interview-apply-input-info" element={<InterviewApplyInputInfo />} />
									<Route path="/interview-apply-input-schedule" element={<InterviewApplyInputSchedule />} />
									<Route path="/interview-apply-complete" element={<InterviewApplyComplete />} />
									<Route path="/interview-apply-end" element={<InterviewApplyEnd />} />
									<Route path="/interview-apply-yet" element={<InterviewApplyYet />} />
									<Route path="/interview-apply-edit-info-check" element={<InterviewApplyEditInfoCheck />} />
									<Route path="/interview-apply-edit-info" element={<InterviewApplyEditInfo />} />
								</Route>
							</Route>
							{/*헤더가 필요없는 페이지 */}
							<Route path="/login/oauth2/code/google" element={<LoginLoading />} />
						</Routes>
					</BrowserRouter>
				</RecoilRoot>
			</ThemeProvider>
		</>
	);
}

export default App;
