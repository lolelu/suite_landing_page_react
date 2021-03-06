import Navbar from "./Navbar/Navbar";
import JustWorks from "./JustWorks/JustWorks";
import Logo from "./Components/Logo";
import ButtonTop from "./Components/ButtonTop";
import SuperSolution from "./SuperSolution/SuperSolution";
import Footer from "./Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="relative bg-white ">
      <div className="absolute bottom-0 left-0 right-0 h-2/6 bg-beige"></div>

      <div className="relative">
        <Navbar>
          <Logo />
          <ButtonTop text="Request Beta Access" />
        </Navbar>
        <main>
          <SuperSolution />

          <JustWorks />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
