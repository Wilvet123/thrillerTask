
import './App.css'
import Destinations from './components/Destinations'
import Dropdowns from './components/Dropdowns'
import Navbar from './components/Navbar'
import Offers from './components/Offers'
import Sidebar from './pages/Sidebar'
import Main from './pages/Main'

function App() {
 
  return (
    <>
    <div className='bg-gray-50 h-screen w-full flex '>
    <Sidebar/>
    <Main/>
    
    </div>
    
    </>
  )
}

export default App
