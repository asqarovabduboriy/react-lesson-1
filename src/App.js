import './App.css';
import  Navbar  from "./components/navbar/Navbar.js";
import Main from "./components/main/Main.js"
import Card from './components/crads/Card.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Main/>
         <Card/>
         <Footer/>
    </div>
  );
}

export default App;
