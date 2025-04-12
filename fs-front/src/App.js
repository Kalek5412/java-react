import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListadoBuses from "./buses/ListadoBuses";
import BusDetalles from "./buses/BusDetalles";

import Navbar from "./template/navbar";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ListadoBuses />} />
          <Route path="/buses/:id" element={<BusDetalles />} />
        </Routes>
        
      </BrowserRouter>
    </div>
   
  );
}

export default App;
