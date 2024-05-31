import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound404 from "./pages/pageError/NotFound404";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Home />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
