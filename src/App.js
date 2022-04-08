import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/index";
import CreateArticle from "./pages/CreateArticle/CreateArticle";
import Diary from "./pages/Diary/index";
import List from "./pages/Diary/List";
import { useState, createContext } from "react";

export const Context = createContext();

function App() {
  const [mode, setMode] = useState(`List`);

  return (
    <Context.Provider value={{ value: mode, setValue: setMode }}>
      <Header />
      <Routes>
        <Route path="" element={<Outlet />}>
          <Route path="/auth" element={<SignIn />} />
          <Route path="/createArticle" element={<CreateArticle />} />
          <Route path="/diary" element={<Diary />}>
            <Route path="" element={<List />} />
          </Route>
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
