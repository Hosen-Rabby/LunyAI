import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Arrows from "./components/Arrows";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App py-4 mx-2">
      <Header />
      <Home />
      <Footer />
      <Arrows />
    </div>
  );
}

export default App;
