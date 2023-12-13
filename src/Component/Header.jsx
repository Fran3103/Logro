

const Header = () => {
  return (
    <div className="w-full bg-bg-header  bg-cover ">
        <div className="m-auto max-w-[1240px] flex  flex-col justify-center items-center py-12 px-4 lg:flex-row lg:py-40">
            <div className="lg:mr-12">
                <h1 className="text-5xl text-white my-4">Construimos sueños, creamos hogares</h1>
                <p className="text-xl my-6 text-white ">Tu camino hacia tu propia casa comienza aquí</p>
            </div>
            <div>
                <form  className="flex flex-col justify-center bg-white py-4 px-10 rounded-xl text-left gap-4 max-w-[450px]">

                    <label htmlFor="" className="-mb-3">Nombre y Apellido</label>
                    <input type="text" name="nombre" id="" className="border rounded-2xl w-full shadow-md border-gray h-9"/>

                    <label htmlFor="" className="-mb-3">Telefono</label>
                    <input type="tel" name="telefono" id="" className="border rounded-2xl w-full shadow-md border-gray h-9"/>

                    <label htmlFor="" className="-mb-3">Correo electronico (opcional)</label>
                    <input type="email" name="correo" id="" className="border rounded-2xl w-full shadow-md border-gray h-9"/>

                    <label htmlFor="" className="-mb-3">Tu Mensaje (opcional)</label>
                    <textarea name="mensaje" id="" cols="30" rows="10" className="border rounded-2xl w-full shadow-md border-gray h-20"></textarea>

                    <button type="submit" className="w-full h-12 bg-blue text-white rounded-3xl text-xl ">Enviar</button>

                    <p className="text-xs m-auto  text-gray">Nunca compartas información confidencial (números de tarjetas de crédito, números de identificación personal, contraseñas) a través de este formulario.</p>
                    <p className="text-xs m-auto text-gray">Este sitio está protegido por reCAPTCHA y se aplica la 
                    <a href="https://policies.google.com/privacy?hl=es" rel="noopener noreferrer" target="_blank" className="text-blue"> Política de privacidad</a> y las <a href="https://policies.google.com/terms?hl=es" rel="noopener noreferrer" target="_blank" className="text-blue">Condiciones de servicio</a> de Google.</p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Header