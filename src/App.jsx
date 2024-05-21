import './App.css'
import Products from './component/Products/Products'
import Projects from './component/Projects/Projects'

function App() {

   return (
      <div className='App'>
         <div className='container'>
            <Products />
            <br />
            <Projects />
         </div>
      </div>
   )
}

export default App
