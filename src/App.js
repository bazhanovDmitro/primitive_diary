import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/index";
import CreateArticle from "./pages/CreateArticle/CreateArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Outlet />}>
          <Route path="/auth" element={<SignIn />} />
          <Route path="/createArticle" element={<CreateArticle />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
