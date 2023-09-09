import './App.css';
import Home from './components/pages/Home/Home';
import Journal from './components/pages/Journal/Journal';
import ChatBot from './components/pages/ChatBot/ChatBot';
import Login from './components/pages/Login/Login';
import Zen from './components/pages/Zen/Zen';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/zen" element={<Zen />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
