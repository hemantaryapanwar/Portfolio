import Navbar from "./component/navbar/navbar";
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/services"
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
