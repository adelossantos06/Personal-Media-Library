import NavBar from './NavBar';
import "./App.css"


function App() {
  return (
    <>
      <div className="App">
        <header>
          <NavBar />
        </header>

      </div>

      <div>
        <blockquote className="quote">"I agreed that what really matters is what you like, not what you are like... Books, records, films - these things matter. "<br /><span className='cite'>-High Fidelity, 2000</span></blockquote>
      </div>



    </>
  );
}

export default App;
