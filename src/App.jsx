import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testmonails from "./components/Testmonails";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testmonails />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
