import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testmonails from "./components/Testmonails";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testmonails />
    </div>
  );
};

export default App;
