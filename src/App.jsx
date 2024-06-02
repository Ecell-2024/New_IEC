
import NavbarDefault from "./components/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/About/About";
import StartUp from "./components/StartUps/Start";
// import Note from "./components/DeanNote/NewNote";
import Carousel from "./components/carousel/carousel";
import Card from "./components/card";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className=" overflow-hidden " >
        <NavbarDefault />
        <Home />
        <About />
        <StartUp/>
        {/* <Note/> */}
        <Carousel/>
        <Card/>
        <Footer />
      </div>
    </>
  );
}

export default App;
