
import { useEffect, useRef } from 'react'
import data from '../../assets/Casas.json'
import Casa from './Casa'
import { GrNext, GrPrevious } from "react-icons/gr"


const Carrousel = () => {
    const slideshow = useRef(null)

   
    const siguiente = () => {
        if (slideshow.current.children.length > 0) {
          const index = slideshow.current.children.length - 1;
          const primerElemento = slideshow.current.children[index].cloneNode(true);
      
          slideshow.current.removeChild(slideshow.current.children[index]);
          slideshow.current.insertBefore(primerElemento, slideshow.current.firstChild);
      
          slideshow.current.style.transition = 'none';
          const tamañoSlide = slideshow.current.children[0].offsetWidth;
          slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
      
          setTimeout(() => {
            slideshow.current.style.transition = `200ms ease-in all`;
            slideshow.current.style.transform = `translateX(0)`;
          }, 30);
        }
      };
      
      const anterior = () => {
        if (slideshow.current.children.length > 0) {
          const ultimoElemento = slideshow.current.children[0].cloneNode(true);
      
          slideshow.current.removeChild(slideshow.current.children[0]);
          slideshow.current.appendChild(ultimoElemento);
      
          slideshow.current.style.transition = 'none';
          const tamañoSlide = slideshow.current.children[0].offsetWidth;
          slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
      
          setTimeout(() => {
            slideshow.current.style.transition = `200ms ease-in all`;
            slideshow.current.style.transform = `translateX(0)`;
          }, 30);
        }
      };
      const moverAutomaticamente = () => {
        siguiente()
      }
      useEffect(() => {
        // Configura el intervalo para el movimiento automático cada 5 segundos
        const intervalId = setInterval(moverAutomaticamente, 5000);
    
        // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
        return () => clearInterval(intervalId);
      }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente
    

  return (
  <div className='w-[300px] md:w-[80%] lg:w-full overflow-hidden m-auto max-w-[1240px] flex flex-col mb-12 relative'>
          <div className='flex w-[355px] h-[450px] gap-8   px-2 py-3 cursor-pointer' ref={slideshow}>
            
            {data.casas.map((casa) => {
        return (
            <Casa
            
            key={casa.id}
            metros={casa.metros}
            tipo={casa.tipo}
            precio={casa.price}
            habitaciones={casa.bedrooms}
            baños={casa.bathrooms}
            img={casa.imagenes.fachada}
            id={casa.id}
            />
        );
        })}
        </div>
      
        <div className='hidden sm:flex gap-4 m-auto absolute w-full justify-between h-full py-3 px-2 pb-4'>
            <button onClick={anterior} className='h-full bg-[rgba(2,2,2,0.2)] rounded-tl-lg rounded-bl-xl w-12 '><GrPrevious className='text-4xl '/></button>
            <button onClick={siguiente} className='h-full bg-[rgba(2,2,2,0.2)]  rounded-tr-xl rounded-br-xl w-12 -mr-2 '><GrNext className='text-4xl text-black'/></button>
        </div>
  </div>
  )
}

export default Carrousel