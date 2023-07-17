import { Routes, Route } from "react-router-dom";

import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import MainPage from "./Pages/MainPage/MainPage";
import Contract from "./Pages/Contract/Contract";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
