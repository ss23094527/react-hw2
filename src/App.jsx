import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home'
import Graphic from './pages/Graphic/Graphic'
import Photo from './pages/Photo'
import About from './pages/About'
import Model from './pages/Model'


function App() {

 
  return (
    <HelmetProvider context={{}}>
      <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Graphic" element={<Graphic />} />
          <Route path="/Photo" element={<Photo />} />
          <Route path="/Model" element={<Model />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
