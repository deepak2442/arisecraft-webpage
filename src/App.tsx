import './App.css'
import CountingYears from './pages/Home/CountingYears'
import Discover from './pages/Home/Discover'
import Expertise from './pages/Home/expertise'
import Footer from './pages/Home/Footer'
import Hero from './pages/Home/hero'
import Intro from './pages/Home/Intro'
import Nav from './pages/Home/nav'
import Requirement from './pages/Home/Requirement'
import Technology from './pages/Home/technology'




function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Intro />
      <Requirement />
      <Expertise />
      <Technology />
      <Discover />
      <CountingYears />
      <Footer />
      
    </>
  )
}

export default App
