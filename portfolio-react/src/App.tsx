import './App.scss';
import {Header, Presentation, Aboutme, Tecnologies, Projects, Testimonial, Contact, Footer} from './components';
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
      <Footer />
    </div>
  );
}

export default App;
