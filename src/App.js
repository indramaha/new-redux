import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';
import CarList from './page/CarList';
import ProtectedRoute from './hoc/ProtectedRoute';
import CarDetail from './page/CarDetail';
import AddCar from './page/AddCar';
import EditCar from './page/EditCar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login /> } />
      <Route path='/register' element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/list-car' element={<CarList />} />
        <Route path='/detail-car/:id' element={<CarDetail />} />
        <Route path='/add-car' element={<AddCar />} />
        <Route path='/edit-car/:id' element={<EditCar />} />
      </Route>
    </Routes>
  );
}

export default App;
