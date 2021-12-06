import React from 'react';
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import CoursePage from "./pages/CoursePage";
import TimeTablePage from "./pages/TimeTablePage";

import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage"/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/coursepage" element={<CoursePage/>}/>
        <Route path="/timetablepage" element={<TimeTablePage/>}/>
        <Route path="/loginpage" element={<Loginpage/>}/>
      </Routes>
    </div>
  );
};
export default App;
