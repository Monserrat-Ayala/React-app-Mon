import Navbar from "./components/navbar/Navbar"
import {Routes, Route} from "react-router-dom";
import Astros from "./components/navbar/astros/astros";
import './App.css';

function App() {
  const links = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/astros", text: "Astros" },
    { id: 3, href: "/Apod", text: "APOD" },
    { id: 4, href: "/about", text: "About" },
  ];
  return  (
     <> 
     <Navbar links={links}/>
     <Routes>
      <Route path="/" element={<h1>Space-app</h1>} />
      <Route path="/astros" element={<Astros />} />
     </Routes>
     <h1>Space-app</h1>
  </>
  );
  
}

export default App;
