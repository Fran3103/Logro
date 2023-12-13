
import { CiMenuBurger, CiLocationOn } from "react-icons/ci"
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../assets/logo-blanco-horizontal-logro.png'
import logoAzul from '../assets/logo-azul-horizontal-logro.png'
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {


    const [active , setActive ] = useState (false)

    const activar = () => setActive (!active)
  return (
    <div className=" m-auto  w-full relative z-20" >
        <div className="flex justify-between items-center p-5 px-12  bg-blue z-100 relative lg:hidden">
            <img src={logo} alt="logo" className="w-40 "  />
      
            <CiMenuBurger className="w-14 h-9 cursor-pointer text-white " onClick={activar}/>
            
           

        <ul className={active ? 'absolute m-auto left-0 top-24 flex gap-5 flex-col text-center bg-blueDark p-10 w-full duration-1000 transition-all ease-in-out -z-40 text-white ' : 'absolute m-auto left-0 -top-60 flex gap-5 flex-col text-center bg-blueDark p-10 w-full duration-1000 transition-all ease-in-out -z-40 text-white '  }>
                
                <Link><li className="hover:text-gray">Inicio</li></Link>
                <Link><li className="hover:text-gray">Propiedades</li></Link>
                <Link><li className="hover:text-gray">Nosotros</li></Link>
                <Link><li className="hover:text-gray">Contacto</li></Link>

                <Link><button className="bg-green px-5 py-3 text-lg w-40 rounded-3xl hover:bg-[#32c895] duration-200">Ingresar</button></Link>
            </ul>
        </div>
        <div className="hidden lg:flex w-full flex-col mt-2  items-center  ">
            <div className="w-screen max-w-[1240px]">
                <div className="flex justify-between mb-2 lg:px-3 ">
                <img src={logoAzul} alt="logo" className="w-40" />
                <div className="flex justify-center items-center gap-5">
                    
                        <FaPhoneAlt className="w-16 h-5" />
                        <div>
                            <p>+595 986 900129</p>
                            <p>info@logro.com.py</p>
                        </div>
                </div>
                <div className="flex justify-center items-center gap-5">
                        <CiLocationOn className="w-16 h-5"  />
                        <div>
                            <p>OJJC SRL - Alfredo Seiferheld 4896,</p>
                            <p>Paseo Adensam Of. N°1</p>
                        </div>
                </div>
            </div>

            </div>
            <div className="bg-blue w-full m-auto">
                <nav className="flex justify-between items-center max-w-[1240px]  py-6 px-4 m-auto ">
                    <ul className= 'flex gap-9 text-xl pl-3  duration-1000 transition-all ease-in-out  text-white '>
                            
                            <Link><li className="hover:text-gray">Inicio</li></Link>
                            <Link><li className="hover:text-gray">Propiedades</li></Link>
                            <Link><li className="hover:text-gray">Nosotros</li></Link>
                            <Link><li className="hover:text-gray">Contacto</li></Link>

                            
                        </ul>
                        <Link><button className="bg-green px-5 py-3 text-lg w-40 rounded-3xl hover:bg-[#32c895] duration-200">Ingresar</button></Link>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar