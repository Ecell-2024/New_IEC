import Home from "./pages/Home/Home";
import NavbarDefault from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className=" overflow-hidden" >
        <NavbarDefault />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
