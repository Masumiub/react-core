import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {name:"Masum", age: 23};
  var styleh1={color:'lightblue', backgroundColor: 'black', padding: '10px', borderRadius: '50px'};

  const products = [ {name:'Photoshop', price:'US$20.20/mo'},
                      {name:'Illustrator', price:'US$22.20/mo'},
                      {name:'InDesign', price:'US$22.20/mo'},
                    ];

  const fileTypes = ['TextFile', 'BinaryFile', 'ObjectFile'];

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
        <Product name1={products[0].name} price={products[0].price}></Product>
        <Product name1={products[1].name}  price={products[1].price}></Product>
        <Product name1={products[2].name} price={products[2].price}></Product> 

        <ul>
          {
            fileTypes.map(fileType => <li>{fileType}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
            products.map(pd => <Product product={pd}></Product>)
        }

        <Counter></Counter>

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


function Product(props){

  const productStyle={
    border:'1px solid gray',
    borderRadius:'3px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'500px',
    float:'left'
  }
  return(
    <div style={productStyle}>
      <h2>{props.name1}</h2>
      <h1>{props.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(0); //state declare

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick = { () => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
export default App;
