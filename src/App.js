import { useState } from "react";

import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import MainPage from "./Pages/MainPage/MainPage";

import style from "./global.module.scss";

function App() {
  const [blur, setBlur] = useState(false);

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="mainContainer">
        <MainPage setBlur={setBlur} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
