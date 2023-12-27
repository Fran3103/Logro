import { Link } from "react-router-dom"
import Comentarios from "./Principal/Comentarios"


const Nosotros = () => {
  return (
    <div className="flex flex-col max-w-[1240px] m-auto mt-6  justify-center items-center sm:items-start">
        <h1 className="text-4xl text-blueDark font-bold m-6 md:text-5xl">Nosotros</h1>
        <div className="flex flex-col w-full md:flex-row m-6">
            <p className="text-center text-lg text-gray m-6 tracking-wide leading-relaxed max-w-[40ch] md:leading-10">
                <strong className="font-bold text-2xl">¡Bienvenidos a Logro!</strong><br />
                Aquí hacemos realidad el sueño de tener tu propio hogar,

                diseñado especialmente para aquellos que buscan construir
                la vida que siempre quisieron.  
                En Logro, creemos que mereces 
                y puedes tener una casa confortable, con la mejor 
                Te ofrecemos viviendas de calidad en la hermosa ciudad de
                Itauguá, específicamente en la Urbanización San Cayetano.
                Queremos ser parte de tu LOGRO y acompañarte en esta
                emocionante aventura de encontrar tu hogar ideal
            </p>
            <div>
                <img src="https://sebastianp49.sg-host.com/wp-content/uploads/2021/12/about2.png" alt="inico" />
            </div>
        </div>

        <div className='flex flex-col my-4 gap-5  p-5 w-full'>
            <h2 className='text-5xl text-blueDark font-bold '>Nuestros Valores</h2>
            <hr className='w-[50px] h-[3px] border-none bg-blue'/>
            <div className="flex flex-col items-center p-4 md:flex-row md:p-0 gap-5 justify-around md:m-auto w-full" >
                <div className="flex flex-col  my-5 bg-white shadow-lg p-8 round max-w-[400px] ">

                    <p>icono</p>
                    <h3 className="text-2xl font-bold my-3">Compromiso Social</h3>
                    <p className="text-gray  leading-7">Nos dedicamos a contribuir positivamente a la  sociedad, facilitando el acceso a viviendas para aquellos que buscan  alcanzar este importante logro en sus vidas.</p>
                </div>
                <div className="flex flex-col  my-5 bg-white shadow-lg p-8 round max-w-[400px]  ">
                    <p>icono</p>
                    <h3 className="text-2xl font-bold my-3">Empoderamiento</h3>
                    <p className="text-gray  leading-7">Facilitamos el empoderamiento de las familias al  brindarles la oportunidad de poseer su propio hogar, proporcionando  las herramientas y el apoyo necesarios para lograrlo.</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col my-4 gap-5  p-5 w-full m-auto justify-center items-center'>
            <h2 className='text-5xl text-center text-blueDark font-bold '>
                ¿Por qué LOGRO®?
            </h2>
            <hr className='w-[50px] h-[3px] border-none bg-blue m-auto' />
            <div className="flex flex-col w-full m-auto justify-center items-center md:flex-row md:gap-5">
                <div className="flex flex-col  my-5 bg-white  p-1  leading-7 gap-2 round max-w-[400px] text-center md:max-w-[340px]">
                    <img className="w-14 h-14 m-auto " src="https://nestpro.fortune-creations.com/wp-content/uploads/2021/12/why1.png" alt="icono" />
                    <h3  className="text-xl text-blueDark font-bold my-4">Integridad</h3>
                    <p className="text-gray  leading-7">Operamos con honestidad y transparencia en todas  nuestras interacciones. Construimos relaciones sólidas basadas en la  confianza y la integridad.</p>
                </div>
                <div className="flex flex-col  my-5 bg-white  p-1  leading-7  round max-w-[400px] text-center md:mt-32 md:max-w-[340px]">
                    <img className="w-14 h-14 m-auto " src="https://nestpro.fortune-creations.com/wp-content/uploads/2021/12/value-img.png" alt="icono" />
                    <h3 className="text-xl text-blueDark font-bold my-4">Innovación</h3>
                    <p className="text-gray  leading-7">Buscamos constantemente formas creativas y eficientes  de construir hogares, adaptándonos a las necesidades cambiantes de  nuestras comunidades y clientes.</p>
                </div>
                <div className="flex flex-col  my-5 bg-white  p-1  leading-7  round max-w-[400px] text-center md:mt-56 md:max-w-[340px]">
                    <img className="w-14 h-14 m-auto " src="https://nestpro.fortune-creations.com/wp-content/uploads/2021/12/why3.png" alt="icono" />
                    <h3 className="text-xl text-blueDark font-bold my-4">Calidad</h3>
                    <p className="text-gray  leading-7"> Nos esforzamos por la excelencia en la construcción,  asegurando la entrega de hogares de alta calidad que superen las  expectativas de nuestros clientes.</p>
                </div>
            </div>
            <Link to="/propiedades"><button  className="sm:w-[400px]  h-12 bg-green px-8 py-1 text-lg  rounded-3xl hover:bg-[#32c895] duration-200  text-white">Buscá tu nuevo hogar</button></Link>
        </div>
        <div className='flex flex-col my-4 gap-5  p-5 w-full m-auto '>
            <h2 className='text-5xl text-start leading-tight text-blueDark font-bold '>El logro de tu casa propia es más fácil de lo que pensabas</h2>
            <hr  className='w-[50px] h-[3px] border-none bg-blue '/>
            <p className="text-xl leading-9 text-gray font-bold">
                La calidad la vas a poder sentir en el proceso de asesoramiento, como también en las casas que te van a durar toda la vida. 
            </p>
            <div className="w-full bg-blue">
                <video width="355px" height="250" autoPlay muted >
                    <source src="https://youtu.be/XHOmBV4js_E"/>
                </video>
            </div>
        </div>
        <div className="m-auto">
            <Comentarios/>
        </div>
    </div>
  )
}

export default Nosotros