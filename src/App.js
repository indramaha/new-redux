import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';
import CarList from './page/CarList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login /> } />
      <Route path='/register' element={<Register />} />
      <Route path='/list-car' element={<CarList />} />
    </Routes>
  );
}

export default App;
