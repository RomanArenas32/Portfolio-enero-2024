import { About, Contact, Technologie, Home, NavBar, Projects, SlideBar, Works, WhatsApp } from './components';

export const App = () => {
  return (
    <>
      <NavBar />
      <SlideBar />  
      <Home />
      <About />
      <Projects />
      <Works />
      <Technologie />
      <Contact />
      <WhatsApp/>
    </>
  );
}

