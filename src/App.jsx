import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Auth from './component/Auth/Auth';
import ChatPage from './component/ChatPage/ChatPage';
function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/chats' element={<ChatPage />} />
      <Route path='*' element={<h1>This Page is not found.</h1>} />
      </Routes>
    </Router>
  )
}

export default App
