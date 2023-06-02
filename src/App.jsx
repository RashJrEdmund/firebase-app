import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import { AuthContextProvider } from './hooks/AuthContext';
import Photos from './pages/Photos/Photos';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="register" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
