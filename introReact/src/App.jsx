import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [state, setState] = useState([])

  async function fetchData() {
    const response = await fetch('https://programacioniii.vercel.app/api/v2/usuario/oferta-academica')// cambiar link de localhost
    const data = await response.json()
    setState(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
    {
      state.length == 0 ? <p>Cargando...</p> : 
      <div>
        {
          state.map((item) => {
            return <TarjetaUniversitaria key={item.id} item={item} />
          })
        }
        

      </div>



    }


    </>
  )
}

export default App
