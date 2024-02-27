import { BrowserRouter } from "react-router-dom";
import './App.scss';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
