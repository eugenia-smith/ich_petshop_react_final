import { Link, NavLink, Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main/Main";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
