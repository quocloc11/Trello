
import { Routes, Route, Navigate } from 'react-router-dom'
//import NotFound from './pages/404/NotFound.jsx'
import Board from '~/pages/Boards/_id'
import Auth from '~/pages/Auth/Auth'
import AccountVerification from './pages/Auth/AccountVerification'
function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Navigate to="/boards/671089222737fc3f008d25ee" replace={true} />
      } />
      <Route path='/boards/:boardId' element={<Board />} />

      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={< Auth />} />
      <Route path='/account/verification' element={< AccountVerification />} />


      <Route path='*' element={<div>404</div>} />

    </Routes>

  )

}

export default App
