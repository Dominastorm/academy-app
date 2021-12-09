import React from "react";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import CoursePage from "./pages/CoursePage";
import TimeTablePage from "./pages/TimeTablePage";
import SubjectPage from "./pages/SubjectPage";
import UnitPage from "./pages/UnitPage";
import SlidesPage from "./pages/SlidesPage";
import NotesPage from "./pages/NotesPage";

import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const subPaths = ["cs201", "cs202", "cs203", "cs204", "cs205"];
  const unitPaths = ["unit1", "unit2", "unit3", "unit4", "unit5"];
  const loginStatus = localStorage.getItem("loggedIn");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/loginpage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/coursepage" element={<CoursePage />} />
        <Route path="/timetablepage" element={<TimeTablePage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        {subPaths.map((sub) => (
          <Route exact path={`/coursepage/${sub}`} element={<SubjectPage />} />
        ))}
        {subPaths.map((sub) =>
          unitPaths.map((unit) => (
            <Route
              path={`coursepage/${sub}/${unit}`}
              element={<UnitPage />}
            />
          ))
        )}
        <Route path="/slides" element={<SlidesPage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>

    </div>
  );
};
export default App;
