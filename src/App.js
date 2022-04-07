import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="" element={<Outlet />}>
        <Route path="/auth" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
