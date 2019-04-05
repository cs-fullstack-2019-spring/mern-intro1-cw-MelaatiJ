import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      data:[],
    };
    this.loadData();
  }
// function that loads data //
  loadData(){
     fetch("/getTicketInfo")
         .then(data =>
         {
           return data.json();
         })
         // the data.json returns data and then set state to data //
         .then(returnedData => this.setState({data:returnedData}));
  }
  render() {
    // maps each data and prints the folloing properties //
    const dataMapping = this.state.data.map((eachElement) => {
        return (<div>
          <p>{eachElement.ticket_person_reporting}</p>
          <p>{eachElement.ticket_problem_description}</p>
          <p>{eachElement.ticket_date}</p>
          <hr/>
        </div>)
    });
  return (
      <div>
        <h1>Trouble Tickets hehe </h1>
        {dataMapping}
      </div>
    );

  }
}

export default App;
