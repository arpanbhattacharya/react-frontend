import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Image from './pages/Image';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/image' element={<Image />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
