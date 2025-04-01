import './App.css'
import Article from './components/Article'
import ArticleList from './components/ArticleList'
import Header from './components/Header'
import Nav from './components/Nav'
import UserProfile from './components/UserProfile'
import {UserProvider} from './contexts/User'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <UserProvider >
      <Header />
      <Nav />
      <Routes >
        <Route path="/user-profile" element={<UserProfile />}/>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes> 
    </UserProvider>
    </>
  )
}

export default App
