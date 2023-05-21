import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GeneralLayout from "./layout/GeneralLayout";
import HomePage from "./pages/HomePage";
import Footer from "./pages/Footer";
import LibraryPage from "./pages/LibraryPage";
import { nav } from "./utils/navLibrary";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="general-container">
          <Routes>
            <Route path="/" element={<GeneralLayout />}>
              <Route path="/users" element={<UserPage />} />
              <Route path="" element={<HomePage />} />
              {nav.map((item) => {
                return (
                  <>
                    <Route
                      path={item.url}
                      element={<LibraryPage data={item} />}
                    />
                  </>
                );
              })}
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
