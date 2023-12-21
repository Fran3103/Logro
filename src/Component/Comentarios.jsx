import { useRef} from 'react'
import data from '../assets/Comentarios.json'
import { GrNext, GrPrevious } from "react-icons/gr"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

const Comentarios = () => {
   

    const slideshow = useRef(null)

    const siguiente = () => {
        if(slideshow.current.children.length > 0){
			console.log('Siguiente')

			// Obtenemos el primer elemento del slideshow.
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = `200ms ease-in all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener('transitionend', transicion);
			}

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener('transitionend', transicion);

		}
    }

    const anterior= () => {
        if(slideshow.current.children.length > 0){
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `200ms ease-in all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
       
    }}
  return (
    <div>
        <div className='flex flex-col m-auto items-center justify-center w-[355px] md:w-[500px] lg:w-[900px] max-w-[1240px]'>
            <FaQuoteLeft className='text-4xl md:text-7xl text-blue mb-6 md:mb-12' />
            <h1 className='text-xl md:text-4xl'>A las familias les encanta LOGRO</h1>
            <h2 className='text-xl md:text-4xl'>Aquí sus comentarios</h2>
            <hr className='w-12 h-1 mt-5 md:mt-8 bg-blue rounded-2xl border-none'/>
        </div>

     <div className='flex w-[355px] md:w-[500px] lg:w-[900px] max-w-[1240px] m-auto  h-[600px] overflow-hidden mt-7 md:mt-12'>
       <div className='w-full h-[600px]' ref={slideshow} >
        <div className=' flex flex-col w-full h-full items-center  gap-5' >
                <p className='w-full text-center text-lg md:text-2xl mb-3 px-7 md:px-0'>{data.comentarios[0].descripcion}</p>
                    <h3 className='text-xl md:text-3xl font-bold '>Familia {data.comentarios[0].familia}</h3>
                    <p className='flex items-center gap-2 text-md md:text-2xl text-[#ea8937] mb-5 md:mb-12'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <div className='w-full flex gap-3 md:gap-12 items-center justify-center'>
                        <button onClick={anterior}><GrPrevious/></button>
                        <img src={data.comentarios[2].imagen} alt="" className='w-12 h-12 md:w-20 md:h-20 rounded-full '/>
                        <img src={data.comentarios[0].imagen} alt="" className='w-16 h-16 md:w-32 md:h-32 rounded-full '/>
                        <img src={data.comentarios[1].imagen} alt="" className='w-12 h-12 md:w-20 md:h-20 rounded-full '/>
                        <button onClick={siguiente}><GrNext/></button>

                </div>
            </div>

            <div className=' flex flex-col w-full h-full items-center  gap-5'>
                <p className='w-full text-center text-lg md:text-2xl mb-3 px-7 md:px-0'>{data.comentarios[1].descripcion}</p>
                    <h3 className='text-xl md:text-3xl font-bold '>Familia {data.comentarios[1].familia}</h3>
                    <p className='flex items-center gap-2 text-md md:text-2xl text-[#ea8937] mb-5 md:mb-12'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <div className='w-full flex gap-3 md:gap-12 items-center justify-center'>
                        <button onClick={anterior}><GrPrevious/></button>
                        <img src={data.comentarios[0].imagen} alt="" className='w-12 h-12 md:w-20 md:h-20 rounded-full '/>
                        <img src={data.comentarios[1].imagen} alt=""className='w-16 h-16 md:w-32 md:h-32 rounded-full '/>
                        <img src={data.comentarios[2].imagen} alt="" className='w-12 h-12 md:w-20 md:h-20 rounded-full '/>
                        <button onClick={siguiente}><GrNext/></button>

                </div>
            </div>

            <div className=' flex flex-col w-full h-full items-center  gap-5'>
                <p className='w-full text-center text-lg md:text-2xl mb-3 px-7 md:px-0'>{data.comentarios[2].descripcion}</p>
                    <h3 className='text-xl md:text-3xl font-bold '>Familia {data.comentarios[2].familia}</h3>
                     <p className='flex items-center gap-2 text-md md:text-2xl text-[#ea8937] mb-5 md:mb-12'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <div className='w-full flex gap-3 md:gap-12 items-center justify-center'>
                        <button onClick={anterior}><GrPrevious/></button>
                        <img src={data.comentarios[1].imagen} alt="" className='w-12 h-12 md:w-20 md:h-20 rounded-full '/>
                        <img src={data.comentarios[2].imagen} alt=""className='w-16 h-16 md:w-32 md:h-32 rounded-full '/>
                        <img src={data.comentarios[0].imagen} alt="" className='w-12 h-12 md:w-20 md:h-20 rounded-full '/>
                        <button onClick={siguiente}><GrNext/></button>

                </div>
            </div>
       </div>
     </div>

      
      
    </div>
  )
}

export default Comentarios