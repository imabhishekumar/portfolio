import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Divider from './Components/Divider';

function App() {
  return (
    <div className="App">
        <Navbar />
        <About />
        <Divider title="__Skills"/>
        <Skills />
        <Divider title="__Projects"/>
        <Projects />
        <Divider title="__Contact"/>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
