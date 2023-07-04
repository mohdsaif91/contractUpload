import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="mainContainer">
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
