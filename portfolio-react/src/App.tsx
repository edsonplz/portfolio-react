import './App.scss';
import {Header, Presentation, Aboutme, Tecnologies, Projects, Testimonial} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Aboutme />
      <Tecnologies />
      <Projects />
      <Testimonial />
    </div>
  );
}

export default App;
