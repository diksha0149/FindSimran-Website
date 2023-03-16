import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import StudyResources from "./pages/Resources/Resources";
import CodingProblems from "./pages/CodingProblems/CodingProblems";
import UpcomingContest from "./pages/Contest/UpcomingContest";
import PostScream from "./pages/PostScream";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyScream from "./pages/Myscream"
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postScream" element={<PostScream />} />
          <Route path="/codingProblems" element={<CodingProblems />} />
          <Route path="/upcomingcontest" element={<UpcomingContest />} />
          <Route path="/StudyResources" element={<StudyResources />} />
          <Route path="/myscream" element={<MyScream />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
