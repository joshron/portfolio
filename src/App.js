import './Styles/App.css';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Cube from './Components/Cube';
import Nav from './Components/Nav';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Cube direction={"forward"} />
      <About />
      <Cube direction={"reverse"} />
      <Skills />
      <Cube direction={"forward"} />
      <Projects />
      <Cube direction={"reverse"} />
      <Contact />
      <Cube direction={"forward"} />
    </div>
  );
}

export default App;
