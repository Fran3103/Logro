import { Route, Routes } from "react-router-dom"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Principal from "./Component/Principal"
import Propiedades from "./Component/Propiedades"
import DetallePropiedad from "./Component/DetallePropiedad"
import Nosotros from "./Component/Nosotros"
import Contacto from "./Component/Contacto"
import ScrollToTop from "./ScrollToTop"
import Resultados from "./Component/Resultados"


function App() {


  return (
    <>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<Principal/>} />
            <Route path="/propiedades" element={<Propiedades/>}/>
            <Route path="/detallePropiedad/:casaID" element={<DetallePropiedad/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/resultados/:filtro" element={<Resultados/>}/>
        </Routes>
        <Footer/>
      
    </>
  )
}

export default App
