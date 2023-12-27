import img1 from '../assets/casa-2/fachada.jpg'
import img2 from '../assets/casa-3/fachada.jpg'
import img3 from '../assets/casa-4/fachada.jpg'
const Footer = () => {
  return (
    <div className='pt-20 sm:max-w-[1240px] max-w-[550px] sm:w-full flex flex-col justify-center items-center p-4 m-auto sm:flex-row sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-3 lg:mt-4'>
        <div className='flex flex-col gap-5 my-4 sm:mr-6 sm:h-56 '>
            <h1 className='text-2xl font-bold lg:text-2xl'>Sobre LOGRO</h1>
            <p className='text-md text-gray font-semibold lg:text-lg lg:mr-12'>Construimos sueños, proporcionando hogares accesibles y de calidad para aquellos que buscan alcanzar su primer gran LOGRO: La Casa Propia</p>
        </div>
        <div className='flex flex-col gap-6 my-4 w-full sm:my-0 sm:h-56 '>
            <h2  className='text-2xl font-bold lg:text-2xl '>Ultimas Obras</h2>
            <div className='flex w-full gap-1 items-center '>
                <img src={img1} alt="imagen 1" className='w-[108px] h-[108px] sm:w-[65px] sm:h-[65px] lg:w-[90px] lg:h-[90px]'/>
                <img src={img2} alt="imagen 2" className='w-[108px] h-[108px] sm:w-[65px] sm:h-[65px] lg:w-[90px] lg:h-[90px]'/>
                <img src={img3} alt="imagen 3"className='w-[108px] h-[108px] sm:w-[65px] sm:h-[65px] lg:w-[90px] lg:h-[90px]'/>
            </div>
        </div>
        <div className='flex flex-col w-full items-start  gap-3 my-4 sm:h-56 '>
            <form action="" className='flex flex-col w-full  gap-5 sm:gap-5 md:gap-7' >
                <label htmlFor="email" className='text-2xl font-bold lg:text-2xl '>Novedades</label>
                <input type="email" name="novedades" id="email" placeholder="ingresé su e-mail" className='py-2 px-5 text-lg text-black   border-[1px] border-gray rounded-full shadow-2xl lg:text-xl lg:px-5 lg:py-4'/>
                <button type="submit" className="bg-green px-5 py-4 text-lg w-40 rounded-full hover:bg-[#32c895] duration-200 text-white shadow-xl lg:text-lg  lg:px-6">Subscríbite</button>
            </form>
        </div>
        <div className='w-full flex flex-col sm:row-start-2 sm:col-start-1 sm:col-end-4 '>
            <hr className='w-full h-[1px] text-gray m-4 sm:ml-0'/>
            <p className='text-md font-semibold text-gray m-4 sm:ml-0 md:text-xl'> © 2024 LOGRO - Todos los derechos reservados -</p>
        </div>
    </div>
  )
}

export default Footer