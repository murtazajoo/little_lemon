import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Nav from "./components/Nav";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Specials />
      <Testimonials />
      <About />

      <Footer />
    </>
  );
}

export default App;
