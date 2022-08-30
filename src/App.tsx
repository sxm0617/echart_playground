import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import User from './pages/user/user';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
