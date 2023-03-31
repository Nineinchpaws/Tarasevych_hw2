import StringDivs from '../JsxExamples/task3';
import JsxExamples from '../JsxExamples';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        
        <h1>
          Hello, world!
        </h1>
        
        <StringDivs strings={['Hello', 'world', 'Task 3']} />

        <JsxExamples>
          <p>Hello World Task 4</p>
        </JsxExamples>

      </header>
    </div>
  );
}

export default App;
