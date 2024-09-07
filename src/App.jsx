import {useState} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(false)
  return (
    <>
      {console.log(state)}
      <main className={state ? "on" : "off"}>
        <section>
          <div className="dot"></div>
          <button
            onClick={() => setState((prevState) => !prevState)}
            type="button">{state ? "turn off" : "turn on"}
          </button>
        </section>
      </main>
      );
    </>
  )
}

export default App;
