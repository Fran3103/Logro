import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md"

const Contacto = () => {

    const submit = (e) => {
        e.preventDefault();
        
        
        e.target.reset()
      };
        
  return (
    <div className="flex flex-col max-w-[1240px] m-auto w-full  sm:items-start p-2  gap-6 mt-6   md:justify-center ">
        <h1 className="text-5xl text-blueDark font-bold md:text-5xl md:mt-5 ">Contacto</h1>

        <h2 className='text-3xl text-blueDark font-bold md:text-4xl md:mt-12'>Hablemos</h2>
        <hr className='w-[50px] h-[3px] border-none bg-blue'/>
        <div>
            <h3  className="text-2xl text-gray font-semibold my-3 md:text-3xl">Agenda una visita y enamórate de tu nueva casa.</h3>
            <p  className="text-gray  leading-7 md:text-xl">Asunción, Paraguay - Alfredo Seiferheld 4896, Paseo Adensam Of. N°1 </p>
            <div className="flex items-center gap-4 my-5 md:text-xl">
                <p  className="text-gray  leading-7 flex items-center gap-3"><FaPhone /> +595 986 900129  </p>
                <p  className="text-gray  leading-7 flex items-center gap-3"><MdEmail />info@logro.com.py</p>
            </div>
        </div>
        <div className="m-auto w-full max-w-[800px]">
            <form onSubmit={submit} className="flex flex-col justify-center bg-white py-4 px-10 rounded-xl text-left gap-4 md:text-2xl ">

                <label htmlFor="nombre" className="-mb-3">Nombre y Apellido</label>
                <input type="text" name="nombre" id="nombre" className="border rounded-2xl w-full shadow-md border-gray h-9 pl-4 md:h-12"/>

                <label htmlFor="telefono" className="-mb-3">Telefono</label>
                <input type="number" name="telefono" id="telefono" className="border rounded-2xl w-full shadow-md border-gray h-9 pl-4 md:h-12"/>

                <label htmlFor="email" className="-mb-3">Correo electronico (opcional)</label>
                <input type="email" name="correo" id="email" className="border rounded-2xl w-full shadow-md border-gray h-9 pl-4 md:h-12"/>

                <label htmlFor="comentario" className="-mb-3">Tu Mensaje (opcional)</label>
                <textarea name="mensaje" id="comentario" cols="30" rows="10" className="border rounded-2xl w-full shadow-md border-gray h-20 p-4 md:h-32"></textarea>

                <button type="submit" className="w-full h-12 bg-blue text-white rounded-3xl text-xl md:h-16 md:text-2xl font-bold ">Enviar</button>

                <p className="text-xs m-auto  text-gray md:text-lg">Nunca compartas información confidencial (números de tarjetas de crédito, números de identificación personal, contraseñas) a través de este formulario.</p>
                <p className="text-xs m-auto text-gray md:text-lg">Este sitio está protegido por reCAPTCHA y se aplica la 
                <a href="https://policies.google.com/privacy?hl=es" rel="noopener noreferrer" target="_blank" className="text-blue md:text-lg"> Política de privacidad</a> y las <a href="https://policies.google.com/terms?hl=es" rel="noopener noreferrer" target="_blank" className="text-blue md:text-lg">Condiciones de servicio</a> de Google.</p>
            </form>
        </div>

        <div className="flex flex-col w-full max-w-[500px] m-auto my-7 md:max-w-[800px]">
            <img className="rounded-t-xl w-full" src="https://sebastianp49.sg-host.com/wp-content/uploads/2021/12/property-agent-4.jpg" alt="imagen" />
            <p   className="text-black bg-white w-full shadow-lg rounded-b-xl  leading-7 font-bold py-12 px-5  md:text-3xl md:px-8 md:mb-8">info@logro.com.py</p>
        </div>
        <div className="m-auto w-[340px] sm:w-[450px] md:w-[550px] md:h-[400px] lg:w-[1000px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57711.455223707984!2d-57.58931499999999!3d-25.305348!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da88db84ddc25%3A0xd530044b63300bc2!2sAlfredo%20Seiferheld%204896%2C%20Asunci%C3%B3n%201421%2C%20Paraguay!5e0!3m2!1ses-419!2sus!4v1703639721801!5m2!1ses-419!2sus" className="w-full h-full"></iframe>
        </div>
    </div>
  )
}

export default Contacto