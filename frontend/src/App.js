import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react'
import HomeScreens from './screens/HomeScreens';



const App = () => {
  return (
    <div>
      <Header/>
      <Container>
      <main>
      <Router>
      <Routes> 
              <Route path='/' Component={HomeScreens} exact/>
          
              </Routes>
      </Router>
      </main>
      </Container>
      <Footer/>
 
    </div>
  )
}

export default App
