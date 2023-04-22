import logo from './logo.svg';
import './App.css';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import CondtionalRenderingFunctional from './components/CondtionalRenderingFunctional';

function App() {
  return (
    <div className="App">
      <ConditionalRenderingClass />
      <CondtionalRenderingFunctional connected={true} />
    </div>
  );
}

export default App;
