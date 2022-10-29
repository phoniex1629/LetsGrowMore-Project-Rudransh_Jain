import './App.css';
import Form from './form';
import ShowData from './showdata';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      submissions : [],
      dataCount: 0
    };
  }
  handleClick(){
    let genders = document.getElementsByName('gender');
    let gender_value;
    for(var i=0; i<genders.length; i++){
      if(genders[i].checked){
        gender_value = genders[i].value;
      }
    }
    let sub = {
      name:document.getElementById('name').value, 
      address:document.getElementById('address').value, 
      email:document.getElementById('email').value, 
      gender: gender_value, 
      about1: document.getElementById('myreason1').value, 
      about2: document.getElementById('myreason2').value, 
    }
    let submissions = this.state.submissions;
    submissions.push(sub);
    this.setState({submissions: submissions, dataCount: this.state.dataCount+1});
  }
  render(){
    // let s = '<showdata/>';
    const subs= [];
    for(let i=0; i<this.state.dataCount; i++){
      subs.push(<ShowData sub = {this.state.submissions[i]}/>);
    }
    return (
      <div>
        <Form handleClick = {()=>{this.handleClick()}}/>
        {subs}
      </div>
    );
  }
}

export default App;