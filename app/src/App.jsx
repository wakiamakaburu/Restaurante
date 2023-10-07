import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Brand from './assets/brand.svg'

function App() {

  return (
    <div className="container-fluid">
        <Header brand={Brand} />
        <Hero />
    </div>
  )
}

export default App
