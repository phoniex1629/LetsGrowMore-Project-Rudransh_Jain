// import logo from './logo.svg';
import "./App.css";
import Navbar from "./NavBar";
import Table from "./table";
import React from "react";
// let chk=false;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chk: false };
  }

  renderTable() {
    // let tb=document.getElementById('t');
    // tb.innerHTML=<Table/>;
    console.log(this.state.chk);
    this.setState({ chk: true });
  }
  render() {
    if (this.state.chk) {
      return (
        <div>
          <Navbar
            handleClick={() => {
              this.renderTable();
            }}
          />
          <Table />
        </div>
      );
    }
    return (
      <div>
        <Navbar
          handleClick={() => {
            this.renderTable();
          }}
        />
      </div>
    );
  }
}

export default App;
