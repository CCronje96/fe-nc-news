import './App.css'
import Article from './components/Article'
import ArticleList from './components/ArticleList'
import ErrorComponent from './components/ErrorComponent'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import TopicsList from './components/TopicsList'
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
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/*" element={<ErrorComponent />} />
      </Routes>
      <Footer /> 
    </UserProvider>
    </>
  )
}

export default App
