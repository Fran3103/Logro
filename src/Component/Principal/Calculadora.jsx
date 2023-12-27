

const Calculadora = () => {
  return (
    <div className="flex flex-col  w-full items-center bg-[url('/src/assets/calculadora-1.jpg')] bg-cover bg-no-repeat mb-3 relative h-56">
       <div className="text-center p-2 mt-5  ">
        <h1>Cuanto dinero puedes ahorrar con LOGRO</h1>
        <button>Encontrá tu hogar</button>
       </div>
        <form  className="w-3/4 flex flex-col items-center gap-3 text-center bg-gray rounded-lg mt-8">
            <label htmlFor="contado">Contado</label>
            <input type="text" name="contado" id="contado" defaultValue="gs. 11943" className="text-center p-2 rounded-lg" />

            <div className="flex flex-col items-center gap-3">
                <label htmlFor="cuotas">Cuotas a 20 años</label>
                <div>
                    <input type="text" name="cuota-Logro" id="cuotas" defaultValue="43424" className="text-center mr-1 p-2 rounded-lg" />
                    <input type="text" name="cuota-Otro" defaultValue="53424" className="text-center p-2 rounded-lg" />
                </div>
            </div>
            <input type="range" name="rango" id="" className="w-3/6"  />
        </form>
    </div>
  )
}

export default Calculadora