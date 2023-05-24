import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
