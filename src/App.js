import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import CoursePage from "./pages/CoursePage";
import { Route, Routes,Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage"/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/coursepage" element={<CoursePage/>}/>
        <Route path="/loginpage" element={<Loginpage/>}/>
      </Routes>
    </div>
  );
};
export default App;
