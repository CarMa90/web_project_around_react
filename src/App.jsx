import logo from "./images/logo.svg";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="page__content">
        <Header logo={logo} />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
