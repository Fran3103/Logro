import { Link } from "react-router-dom"
import fachada from '../../assets/casa-2/fachada.jpg'
import fachada3 from '../../assets/casa-2/fachada-3.jpg'
import plano from '../../assets/casa-2/plano-planta2.jpg'
import { useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"
import { IoStar } from "react-icons/io5"
import { CiLocationOn } from "react-icons/ci"
import { MdPeople } from "react-icons/md"
import { FaShower, FaChartArea } from "react-icons/fa"
import ScrollToTop from "../../ScrollToTop"


const Destacada = () => {

    const [img , setImg] = useState(fachada)

    const siguiente = () => {
        if (img === fachada ){
            setImg(fachada3)
        } if ( img === fachada3) {
            setImg (plano)
        }if(img === plano ){
            setImg(fachada)
        }
    }
    const anterior = () => {
        if (img === plano ){
            setImg(fachada3)
        } if ( img === fachada3) {
            setImg (fachada)
        }if(img === fachada){
            setImg(plano)
        }
    }

  return (
    <div className="mt-24 mb-12 m-auto flex flex-col max-w-[1078px]">
        <div className="relative m-auto">
                <div  className="relative max-w-[1240px]" >
                    <img src={img} alt='imagen' className=" rounded-xl relative  w-full "/>
                    <div className="absolute w-full top-[50%]">
                        <button onClick={anterior} className="absolute text-3xl left-3 cursor-pointer  "><GrPrevious /></button>
                        <button onClick={siguiente} className="absolute right-3 cursor-pointer  text-3xl "><GrNext /></button>
                    </div>
                </div>
        </div>
        <div className="flex flex-col gap-3 p-4">
            <strong className=" flex w-[140px] items-center gap-2  py-1 px-5 rounded-full bg-blue text-white "><IoStar /> Destacada</strong>

            <h1 className="text-4xl font-bold">Tradicional - 68 m2</h1>

            <h4 className="flex items-center gap-2 text-lg text-gray"> <CiLocationOn className="text-2xl font-bold" /> Urbanización Logro San Cayetano, Itauguá, Paraguay</h4>

            <p className="text-lg text-gray max-w-4xl">Aquí hacemos realidad el sueño de tener tu propio hogar, diseñado especialmente para aquellos que buscan construir la vida que siempre quisieron. En Logro, creemos que mereces y puedes tener <Link to={`/detallePropiedad?casaID=2`} className="text-blue">Leer más...</Link></p>
            
            <div className="flex items-start  gap-3">
                <div className="flex  flex-col gap-1 ">
                    <p className="text-md text-black">Dormitorios</p>
                    <p className="flex items-center gap-2 text-lg"><MdPeople className="text-2xl"/> 2</p>
                    
                </div>
                <div className="flex  flex-col gap-1">
                    <p className="text-md text-black">Baños</p>
                    <p className="flex items-center gap-2 text-lg"><FaShower className="text-2xl"/> 1</p>
                   
                </div>
                <div className="flex flex-col  gap-1">
                   <p className="text-md text-black">Area</p>
                    <p className="flex items-center gap-2 text-lg"><FaChartArea className="text-2xl"/> 68 m2</p>
                </div>
            </div>

            <h2 className="text-4xl text-blue mt-3 font-bold">Gs. 2,800,000 <span className="text-xl text-black">/mes</span></h2>
           <Link to={`/detallePropiedad/2`} >
                    <ScrollToTop/>
                    <button className="bg-[#029958] px-5 py-3 text-lg w-40 rounded-3xl hover:bg-[#32c895] duration-200 mt-4 text-white"> Ver Detalles</button>
           </Link>
        </div>
   
    </div>
  )
}

export default Destacada