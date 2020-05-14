import React from 'react';
//import logo from './logo.svg';
import './App.css';
import SamplePage from './SamplePage'

class App extends React.Component{

  render()
  {
    
    return (
      <div className="shopping-list">
      <h1>Shopping List for {this.props.name}</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul> <SamplePage/>
    </div>)
  }
}
export default App;