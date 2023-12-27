
import { CiBoxList } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci"
import { IoMdPeople } from "react-icons/io"
import { FaShower } from "react-icons/fa6"
import { RxRulerSquare } from "react-icons/rx"
import { FaBalanceScale,FaRegHeart } from "react-icons/fa"
import { IoPersonCircle } from "react-icons/io5"
import { MdOutlineCalendarMonth } from "react-icons/md"
import casas from '../assets/Casas.json'
import { useState } from "react";
import { Link } from "react-router-dom";

const Propiedades = () => {

    const [listaActiva , setLista] = useState(true)
    const [CuadriculaActiva , setCuadricula] = useState(false)
 

    const lista = () => {
        setCuadricula(false)
        setLista(true)
    }
    const cuadricula = () => {
        setLista(false) 
        setCuadricula(true)
        }
   

  return (
    <div className="flex flex-col mt-6 items-center justify-center gap-8 max-w-[1240px] m-auto ">
        <h1 className="text-3xl font-bold  my-5 md:text-5xl text-blueDark md:text-left">
            Lista de Propiedades
        </h1>
        <nav className="flex flex-col items-center justify-center gap-9 text-xl md:flex-row  md:max-w-[1240px] w-full md:ml-32 md:mt-7">
            <p className="md:text-lg md:w-full">Mostrando 8 propiedades</p>
            <select name="filtro" id="" className="border rounded-md p-2" >
                <option   value="order por">Ordenar por</option>
                <option value="Descatada">Destacada</option>
                <option value="bajo">Precio: más Bajo a más Alto</option>
                <option value="alto">Precio: más Alto a más Baja</option>
            </select>
            <div className="flex items-center justify-center w-full gap-7 mt-3 text-2xl">
                <CiBoxList  onClick={lista}/>
                <CgMenuGridR  onClick={cuadricula}/>
                <CiLocationOn onClick={cuadricula}/>

            </div>
        </nav>
        <div className={ CuadriculaActiva ? "max-w-[1240px] mt-12 flex flex-col gap-4 items-center justify-center sm:flex-wrap sm:flex-row" : listaActiva ? "max-w-[1240px] mt-12 flex flex-col  gap-12 w-full" : " flex " }>
            {casas.casas.map((casa) => {
                return (
                <Link to={`/detallePropiedad?casaID=${casa.id}`} key={casa.id}> <div className={ CuadriculaActiva ? "w-[345px]  " : listaActiva ? " shadow-2xl rounded-lg   w-[345px]   sm:flex   sm:w-[90%] md:w-[90%] max-w-[1200px] m-auto justify-between" : " flex " }  >
                        <div className={ CuadriculaActiva ? "relative w-full max-w-[400px]" : listaActiva ? "relative w-full max-w-[400px]" : " flex " }>
                        
                            <img src={casa.imagenes.fachada} alt={casa.tipo} className={ CuadriculaActiva ? "rounded-t-xl h-[250px] w-full " : listaActiva ? "rounded-tl-xl rounded-tr-xl sm:rounded-tr-none sm:rounded-bl-xl h-[250px] sm:h-[340px] w-full  " : " flex " }/>
                            <p className="absolute top-4 right-6 px-3 py-1  bg-white rounded-3xl text-sm ">{casa.estado}</p>
                        </div>
                        <div className={ CuadriculaActiva ? "bg-white rounded-b-xl mb-8 shadow-xl px-5 py-4 flex items-start gap-12 justify-between" : listaActiva ? "hidden" : "flex" }>
                            <div 
                            className={ CuadriculaActiva ? "flex flex-col gap-2 justify-start items-start text-xl font-bold h-[140px] w-full" : listaActiva ? "flex flex-col gap-2 justify-start items-start text-xl font-bold h-[140px]  rounded-tr-xl rounded-br-xl w-full " : " flex " }>
                                <h2>{casa.tipo} - {casa.area}</h2>
                                <h3>{casa.price}</h3>
                                <div className="flex gap-2 text-gray font-semibold mt-3">
                                    <p className="flex items-center gap-1"><IoMdPeople /> {casa.bedrooms}</p>
                                    <p className="flex items-center gap-1"><FaShower />{casa.bathrooms}</p>
                                    <p className="flex items-center gap-1"><RxRulerSquare />{casa.area}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-2xl text-gray">
                                <FaBalanceScale />
                                <FaRegHeart />
                            </div>
                        </div>
                        <div className={ CuadriculaActiva ? "hidden" : listaActiva ? "bg-white rounded-b-xl sm:rounded-b-none px-5 py-4 flex items-start  sm:rounded-br-xl rounded-tr-xl   sm:px-5 sm:py-4  sm:gap-12 justify-between sm:w-full h-[340px] " : "flex" }>
                            <div 
                            className={ CuadriculaActiva ? "flex flex-col gap-2 justify-start items-start text-xl font-bold h-[140px] w-full" : listaActiva ? "flex flex-col gap-2 justify-start items-start text-xl font-bold h-[140px] sm:gap-2 sm:mt-2 lg:gap-4 rounded-tr-xl rounded-br-xl w-full " : " flex " }>
                                <h2 className="text-xl sm:mt-3 sm:text-2xl">{casa.tipo} - {casa.area}</h2>
                                <h3 className="text-sm lg:-mt-2">Urbanizacion Logro {casa.urbanizacion}</h3>
                                <div className="flex flex-col justify-between w-full sm:gap-3 sm:flex-row sm:items-center sm:mt-4 lg:flex-col lg:items-start lg:mt-2 lg:gap-1">
                                    <p className="text-blue text-2xl">{casa.price} <span className="text-gray ">/</span> <span className="text-xs text-gray lg:text-base">mes</span></p>
                                    <p className="text-sm">{casa.tipo} </p>
                                </div>
                                <div className="flex flex-col gap-1 mt-3 lg:flex-row lg:justify-start sm:w-full lg:gap-7 -mb-2 lg:mt-5">
                                    <p className="flex text-gray gap-2 items-center text-lg sm:text-base"><IoPersonCircle /> info@logro.com.py</p>
                                    <p className="flex text-gray gap-2  items-center text-lg sm:text-base"><MdOutlineCalendarMonth /> 4 semanas </p>
                                </div>
                                <hr className="w-full h-1 text-gray "/>
                                <div className="flex justify-between items-center w-full mt-1 ">
                                    <div className="flex gap-2 text-gray font-semibold items-center">
                                        <p className="flex items-center gap-1"><IoMdPeople /> {casa.bedrooms}</p>
                                        <p className="flex items-center gap-1"><FaShower />{casa.bathrooms}</p>
                                        <p className="flex items-center gap-1"><RxRulerSquare />{casa.area}</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-2xl text-gray">
                                        <FaBalanceScale />
                                        <FaRegHeart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Propiedades