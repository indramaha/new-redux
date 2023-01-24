import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';
import CarList from './page/CarList';
import ProtectedRoute from './hoc/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login /> } />
      <Route path='/register' element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/list-car' element={<CarList />} />
      </Route>
    </Routes>
  );
}

export default App;
