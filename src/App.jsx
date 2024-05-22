import './App.css'
import Grow from './component/Grow/Grow'
import Products from './component/Products/Products'
import Projects from './component/Projects/Projects'

function App() {

   return (
      <div className='App'>
         <div className='container'>
            <Grow />
            <br />
            <br />
            <Products />
            <br />
            <Projects />
         </div>
      </div>
   )
}

export default App
