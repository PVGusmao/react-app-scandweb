import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { AddProduct } from './pages/addProduct/AddProduct';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='sm:flex sm:justify-between sm:flex-col sm:h-[100vh]'>
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>  
      </div>
      
      <Footer />
    </div>
  )
}

export default App
