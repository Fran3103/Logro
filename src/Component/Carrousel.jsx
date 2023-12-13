
import { useRef } from 'react'
import data from '../../Casas.json'
import Casa from './Casa'

const Carrousel = () => {
    const desliza = useRef([null])
    
    const siguiente = ()=> {
        
            if(desliza.current.children.length > 0){
                desliza.current.style.transition = `3000ms ease-out all`;
                desliza.current.style.transform = `translateX(-580px)`;
    }
    }

    const anterior = ()=> {
       
        if(desliza.current.children.length > 0){
            desliza.current.style.transition = `3000ms ease-out all`;
            desliza.current.style.transform = `translateX(580px)`;
            }
        }


    console.log(data.casas)
  return (
  <div className='w-75% overflow-hidden m-auto bg-green max-w-[1240px] flex flex-col mb-12'>
          <div className='flex w-[355px] h-[450px] m-auto gap-4  justify-center items-center py-3' ref={desliza}>
            
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

            />
        );
        })}
        </div>
        <div className='flex gap-4 m-auto'>
            <button onClick={anterior}>anterior</button>
            <button onClick={siguiente}>siguiente</button>
        </div>
  </div>
  )
}

export default Carrousel