import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';
import Header from './pages/Navbar/Header';
import PostScream from './pages/PostScream';
import StudyResources from './pages/Resources/Resources';
import CodingProblems from './pages/CodingProblems/CodingProblems';
import UpcomingContest from './pages/Upcoming_Contest/UpcomingContest'
import MyScreams from './MyScreams';
// import PageRender from './PageRender';

function App() {
  return (
    <Router>
				<Routes>
					<Route path="/" exact element={<Register />} />
					<Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/header" element={<Header />} />
          <Route path="/postscream" element={<PostScream />} />
          <Route path="/studyResources" element={<StudyResources/>} />
          <Route path="/CodingProblems" element={<CodingProblems/>} />
          <Route path="/Upcoming_Contest" element={<UpcomingContest/>} />
          <Route path="/MyScreams" element={<MyScreams/>} />


				</Routes>
			</Router>
  );
}

export default App;
