import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Outlet />}>
          <Route path="/auth" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
