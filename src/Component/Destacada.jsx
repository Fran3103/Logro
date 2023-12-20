import { Link } from "react-router-dom"
import fachada from '../assets/casa-2/fachada.jpg'
import fachada3 from '../assets/casa-2/fachada-3.jpg'
import plano from '../assets/casa-2/plano-planta2.jpg'
import { useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"
import { IoStar } from "react-icons/io5"
import { CiLocationOn } from "react-icons/ci"
import { MdPeople } from "react-icons/md"
import { FaShower, FaChartArea } from "react-icons/fa"

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
    <div className="mt-24 mb-12">
        <div className="relative">
                <img src={img} alt='imagen' className="p-2 rounded-xl"/>
                <div>
                    <button onClick={anterior} className="absolute top-80 left-3 cursor-pointer  "><GrPrevious /></button>
                    <button onClick={siguiente} className="absolute top-80 right-3 cursor-pointer   "><GrNext /></button>
                </div>
        </div>
        <div className="flex flex-col gap-3 p-4">
            <strong className=" flex w-[140px] items-center gap-2  py-1 px-5 rounded-full bg-blue text-white "><IoStar /> Destacada</strong>

            <h1 className="text-4xl font-bold">Tradicional - 68 m2</h1>

            <h4 className="flex items-center gap-2 text-lg text-[#85aad7]"> <CiLocationOn className="text-2xl font-bold" /> Urbanización Logro San Cayetano, Itauguá, Paraguay</h4>

            <p className="text-lg text-[#85aad7]">Aquí hacemos realidad el sueño de tener tu propio hogar, diseñado especialmente para aquellos que buscan construir la vida que siempre quisieron. En Logro, creemos que mereces y puedes tener <Link className="text-blue">Leer más...</Link></p>
            
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
            <button className="bg-[#029958] px-5 py-3 text-lg w-40 rounded-3xl hover:bg-[#32c895] duration-200 mt-4 text-white"> Ver Detalles</button>
        </div>
    </div>
  )
}

export default Destacada