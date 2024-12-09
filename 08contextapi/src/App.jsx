import UserContextProvider from './context/userContextProvider'


import './App.css'
import UserContext from './context/userContext'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  

  return (
    <UserContextProvider >
      <h1>Hello</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
