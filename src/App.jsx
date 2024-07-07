import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,Footer, RainCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      {/* <Feedbacks /> */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-0">
        <div>
        
      <About />
        </div>
        <StarsCanvas />
      </div>
      <Experience />
      <Works />
      <div className="relative z-0">
        <div>
        
        <Contact />
        <Footer/>
        </div>
        <RainCanvas />
      </div>
          
    </div>
    </BrowserRouter>
  )
}

export default App
