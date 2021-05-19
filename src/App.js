import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./components/Head";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Head title="Home" description="Essa é a página inicial" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
