
import casas from '../assets/Casas.json'
import { MdOutlineCalendarMonth } from "react-icons/md"
import { IoMdPeople } from "react-icons/io"
import { FaShower } from "react-icons/fa6"
import { RxRulerSquare } from "react-icons/rx"
import { FaBalanceScale,FaRegHeart } from "react-icons/fa"
import { GrNext, GrPrevious } from "react-icons/gr"
import Buscador from './Principal/Buscador'
import { Link } from 'react-router-dom'
import Carrousel from './Principal/Carrousel'
import { useState } from 'react'


const DetallePropiedad = () => {


    let query = new URLSearchParams (window.location.search)
    let idCasa = query.get('casaID')- 1
    const [imagen, setImagen] = useState (0)
    const [plano, setPlano] = useState(false)

    let casa = casas.casas
    let imagenes = [
        casa[idCasa].imagenes.acceso,    
        casa[idCasa].imagenes.baño,    
        casa[idCasa].imagenes.cocina,    
        casa[idCasa].imagenes.comedor,    
        casa[idCasa].imagenes.dormitorio,    
        casa[idCasa].imagenes.estar,    
        casa[idCasa].imagenes.fachada    
    ]

    const imagenesDefinidas = imagenes.filter(imagen => imagen !== undefined);
    const siguiente = () => {
        setImagen((imagen + 1) % imagenesDefinidas.length);
    }
    
    const anterior = () => {
        setImagen((imagen - 1 + imagenesDefinidas.length) % imagenesDefinidas.length);
    }
    
    const activarPlano =  () => {
        setPlano(!plano)
    }

    
    console.log('Valor de plano:', plano);

    console.log(imagenesDefinidas)

  return (
    <div className='max-w-[1240px] flex flex-col p-5 sm:p-12 mt-4 gap-2 m-auto '>
        <div className='flex flex-col gap-6 sm:flex-col sm:w-full sm:items-start'>

            <div >
                <h1 className='text-4xl font-bold text-black my-4 md:text-5xl'>{casa[idCasa].tipo} - <span>{casa[idCasa].area}</span></h1>
                <h3 className='text-base text-gray md:text-xl'>Urbanizacion Logro {casa[idCasa].urbanizacion}</h3>
            </div>
            <div className='sm:flex sm:justify-between sm:w-full md:mb-12 '>
                <div>
                    <h3 className='text-4xl font-bold text-blue sm:text-2xl md:text-5xl mb-2' >{casa[idCasa].price} <span className='text-base text-gray font-light'>/mes</span></h3>
                    <p className='text-base text-gray'>{casa[idCasa].tipo}</p>
                </div>
                <strong className=" flex w-[130px] items-center gap-2 text-center  px-6 rounded-full bg-white  text-black font-light border my-5 "> {casa[idCasa].estado}</strong>
            </div>

        </div>

        <div>
            <div className='relative w-full h-[300px] sm:h-[400px] lg:h-[500px]'>
            {imagenesDefinidas.length > 0 && (
                <img
                    src={imagenesDefinidas[imagen]}
                    alt={casa[idCasa]?.tipo || ''}
                    className='rounded-t-xl transition-all duration-300 w-full h-full'
                />
                )}


                    <button onClick={anterior} className='absolute top-[50%] p-1 ml-3 bg-white hover:bg-[rgba(255,255,255,0.5)] transition-all duration-200  rounded-full cursor-pointer' ><GrPrevious className='text-xl sm:text-4xl' /></button>
                    <button onClick={siguiente} className='absolute top-[50%] p-1 mr-3 bg-white hover:bg-[rgba(255,255,255,0.5)] transition-all duration-200  rounded-full right-0 cursor-pointer'><GrNext  className='text-xl sm:text-4xl'/></button>
            </div>
            <div className='w-full bg-[#0a1938] rounded-b-xl sm:bg-[rgba(25,40,62,0.9)] sm:-mt-12 sm:z-50 relative'>
                    <div className='w-full flex flex-col gap-2 items-center justify-center p-3 text-center text-white sm:flex-row sm:gap-12 sm:justify-around'>
                        <div >
                            <p className='text-xs md:text-lg'>Dormitorios</p>
                            <p className='flex items-center justify-center gap-2' ><IoMdPeople />{casa[idCasa].bedrooms}</p>
                        </div>
                        <div>
                            <p className='text-xs md:text-lg'>Baños</p>
                            <p className='flex items-center justify-center gap-2'><FaShower />{casa[idCasa].bathrooms}</p>
                        </div>
                        <div>
                            <p className='text-xs md:text-lg'>Año de construccion</p>
                            <p className='flex items-center justify-center gap-2'><MdOutlineCalendarMonth />{casa[idCasa].yearBuilt}</p>
                        </div>
                        <div>
                            <p className='text-xs md:text-lg'>Area</p>
                            <p className='flex items-center justify-center gap-2'><RxRulerSquare />{casa[idCasa].area}</p>
                        </div>
                    </div>
            </div>
        </div>
        <div  className='flex flex-col my-4 gap-5'>
            <h2 className='text-2xl text-blueDark font-bold '>Descripción</h2>
            <hr className='w-[50px] h-[3px] border-none bg-blue'/>
            <p className='text-base text-gray my-3 lg:text-2xl'>Aquí hacemos realidad el sueño de tener tu propio hogar, diseñado especialmente para aquellos que buscan construir la vida que siempre quisieron. En Logro, creemos que mereces y puedes tener una casa confortable, con la mejor financiación adaptada a tus posibilidades.
            <br /><br />Te ofrecemos viviendas de calidad en la hermosa ciudad de Itauguá, específicamente en la Urbanización San Cayetano.
            <br /><br />Queremos ser parte de tu LOGRO y acompañarte en esta emocionante aventura de encontrar tu hogar ideal.</p>
        </div>
        <div  className='flex flex-col my-4 gap-5'>
            <h2 className='text-2xl text-blueDark font-bold '>Detalles</h2>
            <hr className='w-[50px] h-[3px] border-none bg-blue'/>
            <div className='flex flex-col gap-3 my-4'>
                <ul className='flex flex-col gap-3 md:grid md:grid-cols-2 md:h-500px'>
                    <li className='flex  gap-3 md:text-xl md:gap-5'>Id Propiedad: <p className='text-black font-bold'>{casa[idCasa].propertyId}</p></li>
                    <li className='flex  gap-3 md:text-xl md:gap-5'>Tipo de Propiedad: <p className='text-black font-bold'>{casa[idCasa].tipo}</p></li>
                    <li className='flex  gap-3 md:text-xl md:gap-5'>Area: <p className='text-black font-bold'>{casa[idCasa].area}</p></li>
                    <li className='flex  gap-3 md:text-xl md:gap-5'>Tamaño del Terreno: <p className='text-black font-bold'>{casa[idCasa].lotSize}</p></li>
                    <li className='flex  gap-3 md:text-xl md:gap-5'>Dormitorios: <p className='text-black font-bold'>{casa[idCasa].bedrooms}</p></li>
                    <li className='flex  gap-3 md:text-xl md:gap-5'>Baños: <p className='text-black font-bold'>{casa[idCasa].bathrooms}</p></li>
                    <li className='flex  gap-3 md:text-xl md:gap-5'>Hall: <p className='text-black font-bold'>{casa[idCasa].hall}</p></li>
                    <li className='flex  gap-3 md:text-xl md:gap-5'>Cocina: <p className='text-black font-bold'>{casa[idCasa].kitchen}</p></li>
                    <li className='flex  gap-3 md:text-xl md:gap-5'>Pisos Totales: <p className='text-black font-bold'>{casa[idCasa].totalFloors}</p></li>
                    <li className='flex  gap-3 md:text-xl md:gap-5'>Precio: <p className='text-black font-bold'>{casa[idCasa].price}</p></li>
                    <li className='flex  gap-3 md:text-xl md:gap-5'>Año de Construcion: <p className='text-black font-bold'>{casa[idCasa].yearBuilt}</p></li>
                    
                </ul>

            </div>
        </div>
        <div  className='flex flex-col my-4 gap-5'>
            <h2 className='text-2xl text-blueDark font-bold '>Servicion y Caracteristicas</h2>
            <hr className='w-[50px] h-[3px] border-none bg-blue'/>
            <p className='md:text-2xl'>{'>  '}{casa[idCasa].area}</p>
        </div>
        <div  className='flex flex-col my-4 gap-5 h-full'>
            <h2 className='text-2xl text-blueDark font-bold '>Planos de Planta</h2>
            <hr className='w-[50px] h-[3px] border-none bg-blue'/>
            <div className='flex flex-col w-full bg-gray p-3 gap-4 rounded-xl shadow-xl '>
                <div className='flex flex-col sm:flex-row items-center justify-center md:text-2xl'>
                    <div className='flex  gap-5 w-full items-center sm:w-1/2'>
                        <button onClick={activarPlano} className={plano ? 'py-[1px] bg-white text-gray px-2':'hidden'}>-</button>
                        <button onClick={activarPlano} className={plano ? 'hidden': 'py-[1px] bg-white text-gray px-2'}>+</button>
                        <p>Planta Baja </p>

                    </div>
                    <div className='flex gap-3 items-center sm:text-xl justify-between w-full mt-3 sm:mt-0  ' >
                        <p className='flex  sm:flex-row items-center text-xs md:text-2xl'>{casa[idCasa].area}</p>
                        <p className='flex  sm:flex-row items-center text-xs md:text-2xl'>{casa[idCasa].bedrooms} Dormitorio</p>
                        <p className='flex  sm:flex-row items-center text-xs md:text-2xl '>{casa[idCasa].bathrooms} Baño</p>
                        <p className='flex  sm:flex-row items-center text-xs md:text-2xl'>{casa[idCasa].bathrooms} Baño</p>
                        <p className='flex sm:flex-row items-center text-xs md:text-2xl md:mr-4'>{casa[idCasa].kitchen} Cocina</p>
                    
                    </div>
                </div>
                <div className={ `${plano ? 'h-[200px] transition-all duration-500 overflow-hidden sm:h-[400px] ': 'hidden' } `}>
                        <img
                            src={casa[idCasa].plano}
                            alt={casa[idCasa].propertyId}
                            className='w-full h-full'
                        />
                    </div>

            </div>
            

        </div>
        <div className='flex flex-col my-4 gap-5'>
            <h2 className='text-2xl text-blueDark font-bold '>Adjuntos de Propiedad</h2>
            <hr className='w-[50px] h-[3px] border-none bg-blue'/>
            <p className='text-base md:text-2xl'>Brochure</p>
        </div>
        <div className='flex flex-col my-4 gap-5'>
            <h2 className='text-2xl text-blueDark font-bold '>Enviar mensaje al Agente</h2>
            <hr className='w-[50px] h-[3px] border-none bg-blue' />
            <div className='w-full'>
                <form  className="flex flex-col justify-center bg-white py-4 rounded-xl text-left gap-4 max-w-[550px] md:text-lg">

                    <label htmlFor="nombre" className="-mb-3">Nombre y Apellido</label>
                    <input type="text" name="nombre" id="nombre" className="border rounded-2xl w-full shadow-md border-gray h-9 pl-4 md:h-10"/>

                    <label htmlFor="telefono" className="-mb-3">Telefono</label>
                    <input type="number" name="telefono" id="telefono" className="border rounded-2xl w-full shadow-md border-gray h-9 pl-4 md:h-10"/>

                    <label htmlFor="email" className="-mb-3">Correo electronico (opcional)</label>
                    <input type="email" name="correo" id="email" className="border rounded-2xl w-full shadow-md border-gray h-9 pl-4 md:h-10"/>

                    <label htmlFor="comentario" className="-mb-3">Tu Mensaje (opcional)</label>
                    <textarea name="mensaje" id="comentario" cols="30" rows="10" className="border rounded-2xl w-full shadow-md border-gray h-20 p-4 md:h-36"></textarea>

                    <button type="submit" className="w-full h-12 bg-blue text-white rounded-3xl text-xl md:h-14 md:text-xl ">Enviar</button>

                    <p className="text-xs m-auto  text-gray md:text-base">Nunca compartas información confidencial (números de tarjetas de crédito, números de identificación personal, contraseñas) a través de este formulario.</p>
                    <p className="text-xs m-auto text-gray md:text-base">Este sitio está protegido por reCAPTCHA y se aplica la 
                    <a href="https://policies.google.com/privacy?hl=es" rel="noopener noreferrer" target="_blank" className="text-blue md:text-base"> Política de privacidad</a> y las <a href="https://policies.google.com/terms?hl=es" rel="noopener noreferrer" target="_blank" className="text-blue md:text-base">Condiciones de servicio</a> de Google.</p>
                </form>
            </div>
        </div>

        <div className='flex flex-col my-1 gap-5'>
            <h2 className='text-2xl text-blueDark font-bold '>Propiedades Similares</h2>
            <hr className='w-[50px] h-[3px] border-none bg-blue'/>
            <Carrousel/>
        </div>
        <div className='flex flex-col gap-5 m-auto w-[90%] sm:w-[600px] bg-white p-3 rounded-xl shadow-xl py-6 my-12'>
            <div className='flex flex-col justify-center items-center gap-4 w-full '>
                <img src="https://sebastianp49.sg-host.com/wp-content/uploads/2021/12/property-agent-4-150x150.jpg" alt="contacto" className='rounded-full'/>
                <p className='text-xl text-black font-bold'>info@logto.com.py</p>
                <Link><button  className="sm:w-[400px]  h-12 bg-green px-8 py-1 text-lg  rounded-3xl hover:bg-[#32c895] duration-200  text-white">Enviar mensaje</button></Link>
            </div>
        </div>
        <div className='flex flex-col my-4 gap-5'>
            <h2 className='text-2xl text-blueDark font-bold '>Buscar Propiedades</h2>
            <hr className='w-[50px] h-[3px] border-none bg-blue'/>
            <Buscador/>
        </div>
        <div className='flex flex-col my-4 gap-5'>

        <h2 className='text-2xl text-blueDark font-bold '>Propiedades Destacadas</h2>
        <hr className='w-[50px] h-[3px] border-none bg-blue'/>

        <div className='md:flex w-full max-w-[1240px] justify-around'>
            <Link to={`/detallePropiedad?casaID=${casa[2].id}`} > 
                <div className= "w-[345px]  m-auto"   >
                            <div className= "relative w-full max-w-[400px]"  >
                            
                                <img src={casa[2].imagenes.fachada} alt={casa[2].tipo} className= "rounded-t-xl h-[250px] w-full " />
                                <p className="absolute top-4 right-6 px-3 py-1  bg-white rounded-3xl text-sm ">{casa[2].estado}</p>
                            </div>
                            <div className= "bg-white rounded-b-xl mb-8 shadow-xl px-5 py-4 flex items-start gap-12 justify-between" >
                                <div 
                                className=  "flex flex-col gap-2 justify-start items-start text-xl font-bold h-[140px] w-full" >
                                    <h2>{casa[2].tipo} - {casa[2].area}</h2>
                                    <h3>{casa[2].price}</h3>
                                    <div className="flex gap-2 text-gray font-semibold mt-3">
                                        <p className="flex items-center gap-1"><IoMdPeople /> {casa[2].bedrooms}</p>
                                        <p className="flex items-center gap-1"><FaShower />{casa[2].bathrooms}</p>
                                        <p className="flex items-center gap-1"><RxRulerSquare />{casa[2].area}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-2xl text-gray">
                                    <FaBalanceScale />
                                    <FaRegHeart />
                                </div>
                            </div>
                            
                        </div>
                </Link>
                <Link to={`/detallePropiedad?casaID=${casa[1].id}`} > 
                <div className= "w-[345px]  m-auto"   >
                            <div className= "relative w-full max-w-[400px]"  >
                            
                                <img src={casa[1].imagenes.fachada} alt={casa[1].tipo} className= "rounded-t-xl h-[250px] w-full " />
                                <p className="absolute top-4 right-6 px-3 py-1  bg-white rounded-3xl text-sm ">{casa[1].estado}</p>
                            </div>
                            <div className= "bg-white rounded-b-xl mb-8 shadow-xl px-5 py-4 flex items-start gap-12 justify-between" >
                                <div 
                                className=  "flex flex-col gap-2 justify-start items-start text-xl font-bold h-[140px] w-full" >
                                    <h2>{casa[1].tipo} - {casa[1].area}</h2>
                                    <h3>{casa[1].price}</h3>
                                    <div className="flex gap-2 text-gray font-semibold mt-3">
                                        <p className="flex items-center gap-1"><IoMdPeople /> {casa[1].bedrooms}</p>
                                        <p className="flex items-center gap-1"><FaShower />{casa[1].bathrooms}</p>
                                        <p className="flex items-center gap-1"><RxRulerSquare />{casa[1].area}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-2xl text-gray">
                                    <FaBalanceScale />
                                    <FaRegHeart />
                                </div>
                            </div>
                            
                        </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default DetallePropiedad