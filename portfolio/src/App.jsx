import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"; 

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary-bg'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
         <Hero/>
        </div>
        <About />
        <Tech />
        <Experience />
        <StarsCanvas />
        <Works />
        <div className='relative z-0'>
          <StarsCanvas />
          {/* <Resume/> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
