import React from 'react';
import './App.css';
//import Table from 'material-ui-table';
import axios from 'axios';

class PassportList extends React.Component{
  state={
    error:null,
    isLoad: false,
    items:[]
  }

  componentDidMount(){
    axios.get(`https://spring-boot-rest-service-brash-eland-qk.cfapps.io/students`)
      .then(res => {
        const persons = res.data;
        this.setState({
        isLoad:true,
        items:persons
      })
      })
  }
  render()
  {
    const {error, isLoad,items} = this.state;
    console.log("isLoad..."+isLoad+"......"+items)
    if(error){
    return <div> Error: ${error.message}</div>
    }else if(!isLoad){
    return <div>Loading: </div>
    }else{
      return (
        <ul>
        {items.map(item=>(
          <li key={item.name}>
          {item.id} - {item.name} - {item.passportNumber} 
          </li>
        )
        )}
        </ul>
    );
    }
  }
}
export default PassportList;