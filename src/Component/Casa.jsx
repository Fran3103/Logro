
import { IoMdPeople } from "react-icons/io"
import { FaShower } from "react-icons/fa6"
import { RxRulerSquare } from "react-icons/rx"
import { FaBalanceScale,FaRegHeart } from "react-icons/fa"
// eslint-disable-next-line react/prop-types
const Casa = ({metros,habitaciones,baños, tipo, img, precio}) => {

    


  return (
    <div className="w-[395px] h-[450px] m-auto"  >
        <div className="relative w-full">
        
            <img src={img} alt={tipo}  className="rounded-t-xl h-[250px] w-full"/>
            <p className="absolute top-4 right-6 px-3 py-1  bg-white rounded-3xl text-sm ">{tipo}</p>
        </div>
        <div className="bg-white rounded-b-xl shadow-xl px-5 py-4 flex items-start gap-4 justify-between">
            <div className="flex flex-col gap-2 justify-start items-start text-xl font-bold h-[140px] w-full">
                <h2>{tipo} - {metros}</h2>
                <h3>{precio}</h3>
                <div className="flex gap-2 text-gray font-semibold mt-3">
                    <p className="flex items-center gap-1"><IoMdPeople /> {habitaciones}</p>
                    <p className="flex items-center gap-1"><FaShower />{baños}</p>
                    <p className="flex items-center gap-1"><RxRulerSquare />{metros}</p>
                </div>
            </div>
            <div className="flex items-center gap-3 text-2xl text-gray">
                <FaBalanceScale />
                <FaRegHeart />
            </div>
        </div>
    </div>
  )
}

export default Casa