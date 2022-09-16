import logo from './logo.svg';
import './App.css';

function App() {
  var person = {name:"Masum", age: 23};
  var styleh1={color:'lightblue', backgroundColor: 'black', padding: '10px', borderRadius: '50px'};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Are Cholse to!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Start
        </a>
        <h1 style={styleh1}>Start React App {0+1}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Made by: {person.name +" "+ person.age}</p>
        
        <Test name="Masum"></Test>
        <Test name="Ridwan"></Test>
        <Test name="Sakib"></Test>
        <Test name="Erfan"></Test>

      </header>
    </div>
  );
}

function Test(props){
  return (
  <div style={{border: '2px solid black', margin: '10px'}}>
  <h4>Text has returned. {props.name}</h4>
  <p>Another Text is also here.</p>
  </div>
  )
}

export default App;
