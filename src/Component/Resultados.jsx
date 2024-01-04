
import data from '../assets/Casas.json';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdPeople } from "react-icons/io"
import { FaShower } from "react-icons/fa6"
import { RxRulerSquare } from "react-icons/rx"
import { FaBalanceScale,FaRegHeart } from "react-icons/fa"


const Resultados = () => {
  const { filtro } = useParams();
  const [casas, setCasas] = useState([]);

  useEffect(() => {
     
    const filtrarCasas = () => {
      if (filtro === 'Construida') {
        return data.casas.filter((casa) => casa.estado === 'construida');
      } else if (filtro === 'a Construir') {
        return data.casas.filter((casa) => casa.estado === 'a construir');
      } else if (filtro === 'tipo') {
        return data.casas;
      } else {
        
        return [];
      }
    };

     
    setCasas(filtrarCasas());
  }, [filtro]);

  return (
    <div className="flex flex-col mt-6 items-center justify-center gap-8 max-w-[1240px] m-auto ">
      <h1 className="text-3xl font-bold  my-5 md:text-5xl text-blueDark md:text-left">
        Casas 
      </h1>
      <div className='flex flex-wrap gap-3 m-auto justify-center'>
        {casas.map((casa) => (
            <Link to={`/detallePropiedad/${casa.id}`} key={casa.id}> <div className= "w-[345px]   "    >
            <div className="relative w-full max-w-[400px]" >
            
                <img src={casa.imagenes.fachada} alt={casa.tipo} className="rounded-t-xl h-[250px] w-full "/>
                <p className="absolute top-4 right-6 px-3 py-1  bg-white rounded-3xl text-sm ">{casa.estado}</p>
            </div>
            <div className= "bg-white rounded-b-xl mb-8 shadow-xl px-5 py-4 flex items-start gap-12 justify-between" >
                <div 
                className="flex flex-col gap-2 justify-start items-start text-xl font-bold h-[140px] w-full" >
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
            
                </div>
                </Link>
              ))}
      </div>
      
    </div>
  );
};

export default Resultados;
