import './App.scss';
import {Header, Presentation, Aboutme, Tecnologies, Projects, Testimonial} from './components';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Aboutme />
      <Tecnologies />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
