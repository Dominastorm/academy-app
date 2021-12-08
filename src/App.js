import React from "react";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import CoursePage from "./pages/CoursePage";
import TimeTablePage from "./pages/TimeTablePage";
import SubjectPage from "./pages/SubjectPage";

import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/loginpage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/coursepage" element={<CoursePage />} />
        <Route path="/timetablepage" element={<TimeTablePage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/cs201" element={<SubjectPage />} />
        <Route path="/cs202" element={<SubjectPage />} />
        <Route path="/cs203" element={<SubjectPage />} />
        <Route path="/cs204" element={<SubjectPage />} />
        <Route path="/cs205" element={<SubjectPage />} />
      </Routes>
    </div>
  );
};
export default App;
