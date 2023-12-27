import { Route, Routes } from "react-router-dom"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Principal from "./Component/Principal"
import Propiedades from "./Component/Propiedades"
import DetallePropiedad from "./Component/DetallePropiedad"
import Nosotros from "./Component/Nosotros"
import Contacto from "./Component/Contacto"


function App() {


  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Principal/>} />
            <Route path="/propiedades" element={<Propiedades/>}/>
            <Route path="/detallePropiedad" element={<DetallePropiedad/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
        <Footer/>
      
    </>
  )
}

export default App
