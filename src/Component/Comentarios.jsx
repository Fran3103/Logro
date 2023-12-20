import { useState } from 'react'
import data from '../assets/Comentarios.json'
import { GrNext, GrPrevious } from "react-icons/gr"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

const Comentarios = () => {
    const [comment1, setComment] = useState(0)
    const [comment2, setComment2] = useState(1)
    const [comment3, setComment3] = useState(2)

    const siguiente = () => {
       
    }

    const anterior= () => {
       
    }
  return (
    <div>
        <div className='flex flex-col m-auto items-center justify-center w-[600px]'>
            <FaQuoteLeft className='text-7xl text-blue mb-12' />
            <h1 className='text-4xl'>A las familias les encanta LOGRO</h1>
            <h2 className='text-4xl'>Aquí sus comentarios</h2>
            <hr className='w-12 h-1 mt-8 bg-blue rounded-2xl border-none'/>
        </div>
     <div className='flex  w-[700px] m-auto  h-[600px] overflow-hidden mt-12'>
       <div className='w-[2100px] h-[600px]'>
        <div className=' flex flex-col w-[700px] h-full items-center  gap-5'>
                <p className='w-full text-center text-2xl mb-3'>{data.comentarios[comment1].descripcion}</p>
                    <h3 className='text-3xl font-bold '>Familia {data.comentarios[comment1].familia}</h3>
                    <p className='flex items-center gap-2 text-2xl text-[#ea8937] mb-12'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <div className='w-full flex gap-12 items-center justify-center'>
                        <button onClick={anterior}><GrPrevious/></button>
                        <img src={data.comentarios[comment3].imagen} alt="" className='w-20 h-20 rounded-full '/>
                        <img src={data.comentarios[comment1].imagen} alt="" className='w-32 h-32 rounded-full '/>
                        <img src={data.comentarios[comment2].imagen} alt="" className='w-20 h-20 rounded-full '/>
                        <button onClick={siguiente}><GrNext/></button>

                </div>
            </div>

            <div className=' flex flex-col w-[700px] h-full items-center justify-center gap-5'>
                <p className='w-full text-center text-xl mb-3'>{data.comentarios[comment2].descripcion}</p>
                    <h3 className='text-xl font-bold mb-4'>Familia {data.comentarios[comment2].familia}</h3>
                <div className='w-full flex gap-12 items-center justify-center'>
                        <button onClick={anterior}><GrPrevious/></button>
                        <img src={data.comentarios[comment1].imagen} alt="" className='w-20 h-20 rounded-full '/>
                        <img src={data.comentarios[comment2].imagen} alt="" className='w-32 h-32 rounded-full '/>
                        <img src={data.comentarios[comment3].imagen} alt="" className='w-20 h-20 rounded-full '/>
                        <button onClick={siguiente}><GrNext/></button>

                </div>
            </div>

            <div className=' flex flex-col w-[700px] h-full items-center justify-center gap-5'>
                <p className='w-full text-center text-xl mb-3'>{data.comentarios[comment3].descripcion}</p>
                    <h3 className='text-xl font-bold mb-4'>Familia {data.comentarios[comment3].familia}</h3>
                <div className='w-full flex gap-12 items-center justify-center'>
                        <button onClick={anterior}><GrPrevious/></button>
                        <img src={data.comentarios[comment2].imagen} alt="" className='w-20 h-20 rounded-full '/>
                        <img src={data.comentarios[comment3].imagen} alt="" className='w-32 h-32 rounded-full '/>
                        <img src={data.comentarios[comment1].imagen} alt="" className='w-20 h-20 rounded-full '/>
                        <button onClick={siguiente}><GrNext/></button>

                </div>
            </div>
       </div>
     </div>

      
      
    </div>
  )
}

export default Comentarios