
import { FaSearch } from "react-icons/fa";

const Buscador = () => {
  return (
    <div>
        <div>
            <form className="flex flex-col justify-between m-auto  rounded-xl  shadow-2xl bg-white my-7 w-3/4 sm:max-w-[550px] md:flex-row md:max-w-[1240px]">

               <div className="flex flex-col  md:gap-[1px]  gap-3 md:flex-row md:justify-between w-full md:bg-gray p-5 md:p-0">
                    <div className="flex flex-col md:gap-2 md:bg-white md:w-full md:h-full md:p-3">
                        <label htmlFor="" >Buscar por</label>
                        <select name="Buscar por" id="" className="text-lg font-bold">
                            <option value="tipo">Todas</option>
                            <option value="Minimalista">Minimalista</option>
                            <option value="Tradicional">Tradicional</option>
                        </select>
                    </div>

                    <div className="flex flex-col md:gap-2 md:bg-white md:w-full md:h-full md:p-3">
                        <label htmlFor="">Localidad</label>
                        <select name="Localidad" id="" className="text-lg font-bold">
                            <option value="Todas">Todas</option>
                            <option value="Itagua">Itagua</option>
                        </select>

                    </div>
                    
                    <div className="flex flex-col md:gap-2 md:bg-white md:w-full md:h-full md:p-3">
                        <label htmlFor="">Precio</label>
                        <select name="Precio" id="" className="text-lg font-bold">
                            <option value="Todos los Precios">Todos los Precios</option>
                            <option value="Gs">Gs</option>
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