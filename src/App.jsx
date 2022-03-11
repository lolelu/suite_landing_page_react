import Navbar from "./Navbar/Navbar";
import JustWorks from "./JustWorks/JustWorks";
import Logo from './Components/Logo';
import ButtonTop from './Components/ButtonTop';
import SuperSolution from "./SuperSolution/SuperSolution";


import './App.css';


function App() {
  return (
    <div className=" bg-white ">

      <Navbar>
        <Logo />
        <ButtonTop text="Request Beta Access" />
      </Navbar>

      <SuperSolution />

      <JustWorks />

    </div>
  );
}

export default App;
