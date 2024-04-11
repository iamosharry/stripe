import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero'
import Sponsored from './Components/Sponsored/Sponsored'
import Platform from './Components/Platform/Platform'
import Invoice from './Components/Invoice/Invoice'
import Apiss from "./Components/Apiss/Apiss"
import Approach from './Components/Approach/Approach'
import Global from "./Components/Global/Global"
import Session from "./Components/Session/Session"
import Waiting from "./Components/Waiting/Waiting"
import Footer from "./Components/Footer/Footer"


const App = () => {
  return (
    <>
    
      
      <div className="container">
        <Navbar/>
        <Hero/>
        <Sponsored/>
        <Platform/>
        <Invoice/>
        <Apiss/>
        <Approach/>
        <Global/>
        <Session/>
        <Waiting/>
      </div>
      <Footer/>
      
    </>
  )
}

export default App