import './App.css'
import { Instructions } from './components/Instructions'

function App() { 
  
  return (
    <>
      <section id='instructions'>
        <Instructions/>
      </section>      

      <div>
            <p data-testid="price">$100</p>
            <button>Apply Discount</button>
        </div>
    </>
  )
}

export default App
