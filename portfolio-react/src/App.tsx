import './App.scss';
import {Header, Presentation, Aboutme, Tecnologies, Projects} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Aboutme />
      <Tecnologies />
      <Projects />
    </div>
  );
}

export default App;
