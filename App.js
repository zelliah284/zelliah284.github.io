 import './index.css';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import './style.css';
 
 function App() {
  return (
   <Routes>
    <Route path="/" element={ <Home /> }/>
    <Route path="/contact" element={ <Contact /> } />
   </Routes>
  )
}
export default App;