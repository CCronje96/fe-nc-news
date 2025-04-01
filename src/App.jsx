import './App.css'
import ArticleList from './components/ArticleList'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import {UserProvider} from './contexts/User'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <UserProvider >
      <Header />
      <Routes >
        <Route path="/user-profile" element={<UserProfile />}/>
      </Routes> 
    </UserProvider>
    </>
  )
}

export default App
