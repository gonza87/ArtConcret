import Header from "./components/Header";
import CaruselHome from "./components/CarouselHome";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <CaruselHome />
      <ItemListContainer />
      <Footer />
    </>
  );
}

export default App;
