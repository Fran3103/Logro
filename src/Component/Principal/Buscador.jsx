
import {  useState } from "react";
import { FaSearch } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Buscador = ( ) => {

        const navigate = useNavigate();
        const [filtro, setFiltro] = useState("tipo");
     
      
        const handleFiltroChange = (event) => {
          setFiltro(event.target.value);
        };
      
      
     
      
        const handleSubmit = (event) => {
          event.preventDefault();
        
        navigate(`/resultados/${filtro}`)   
        }
        
      
       
      
     
       


  return (
    <div className="p-10">
        <div className="m-auto">
            <form className="flex flex-col justify-between m-auto  rounded-xl  shadow-2xl bg-white my-7 w-[300px] sm:max-w-[650px] md:flex-row lg:w-full md:max-w-[1240px] " onSubmit={handleSubmit}>

               <div className="flex flex-col  md:gap-[1px]  gap-3 md:flex-row md:justify-between w-full md:bg-gray p-5 md:p-0">
                    <div className="flex flex-col md:gap-2 md:bg-white md:w-full md:h-full md:p-3">
                        <label htmlFor="buscar" >Buscar por</label>
                        <select name="Buscar por" id="buscar" className="text-lg font-bold" onChange={handleFiltroChange}>
                            <option defaultValue="tipo">Todas</option>
                            <option defaultValue="Construida">Construida</option>
                            <option defaultValue="a Construir">A Construir</option>
                        </select>
                    </div>

                    <div className="flex flex-col md:gap-2 md:bg-white md:w-full md:h-full md:p-3">
                        <label htmlFor="localidad">Localidad</label>
                        <select name="Localidad" id="localidad" className="text-lg font-bold" >
                            <option defaultValue="Todas">Todas</option>
                            <option defaultValue="Itagua">Itagua</option>
                        </select>

                    </div>
                    
                    <div className="flex flex-col md:gap-2 md:bg-white md:w-full md:h-full md:p-3">
                        <label htmlFor="precio">Precio</label>
                        <select name="Precio" id="precio" className="text-lg font-bold" >
                            <option defaultValue="Todos los Precios">Todos los Precios</option>
                            <option defaultValue="Gs">Gs</option>
                        </select>
                    </div>
               </div>

                <button type="submit" className="bg-green px-5 py-5  text-lg w-full md:w-32   hover:bg-[#32c895] duration-200"><FaSearch className="m-auto text-white"/></button>
            </form>
        </div>

       
    </div>
  )
}

export default Buscador