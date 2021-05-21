import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./components/Head";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head title="Home" description="Essa é a página inicial" />
        <Header />
        <Routes>
          <div className="content">
            <Route path="/" element={<Home />} />
          </div>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
