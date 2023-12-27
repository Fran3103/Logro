
import Buscador from "./Principal/Buscador"

import Carrousel from "./Principal/Carrousel"
import Comentarios from "./Principal/Comentarios"
import Destacada from "./Principal/Destacada"
import Header from "./Principal/Header"

const Principal = () => {
  return (
    <div>
        <Header/>
        <Buscador/>
        <Carrousel/>
        <Destacada/>
        <Comentarios/>

    </div>
  )
}

export default Principal