import { useState } from 'react'
import './App.css'
import { Instructions } from './components/Instructions'

function App() { 
  const [price, setprice] = useState(100);

  function descuentoClick(valorDescuento){
    setprice(valorDescuento);
  }

  return (
    <>
      <section id='instructions'>
        <Instructions/>
      </section>      

      <div>
            <p data-testid="price">${price}</p>
            <button onClick={() => descuentoClick(75)}>Apply Discount </button>
        </div>
    </>
  )
}

export default App
