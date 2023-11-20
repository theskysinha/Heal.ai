import './App.css';
import Home from './components/pages/Home/Home';
import Journal from './components/pages/Journal/Journal';
import ChatBot from './components/pages/ChatBot/ChatBot';
import Login from './components/pages/Login/Login';
import Zen from './components/pages/Zen/Zen';
import Registration from './components/pages/Registration/Registration';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './Context/userContext';



import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials =true

function App() {
  return (
    <UserContextProvider>
    <Router>
        <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/zen" element={<Zen />} />
      </Routes>
    </Router>
    </UserContextProvider>
  );
}

export default App;
