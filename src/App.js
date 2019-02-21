import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    constructor(props) {
    super(props);
        
    this.state = {
        templates1 : [
           "A", "B", "C", "D", "E", "F"
        ],
        defalutSelect1 : "A",
        templates2 : [],
        defalutSelect2 : ""
    };
        this.onChange1.bind(this)
         this.onChange2.bind(this)
        
        
        this.dummyLists = [
            [
           "A", "AA", "AAA", "AAAA", "AAAAAA", "AAAAAAA"
        ],
              [
           "B", "BB", "BBB", "BBBB", "BBBBB", "BBBBBB"
        ],
              [
           "C", "CC", "CCC", "CCCC", "CCCCC", "CCCCCC"
        ],
              [
           "D", "DD", "DDD", "DDDD", "DDDDD", "DDDDDD"
        ],
              [
           "E", "EE", "EEE", "EEEE", "EEEEE", "EEEEEE"
        ],
            [
           "F", "FF", "FFF", "FFFF", "FFFFF", "FFFFFF"
        ]
        ]
  }
    
     onChange1 = event => {
       let currentVal = this.state.defalutSelect2
            
          let nextIndex = Math.floor(Math.random() * 6) + 1
          this.setState({ defalutSelect1: event.target.value });
        
          let indexToPopulate = this.state.templates1.indexOf(event.target.value)
          
          console.log("indextopopulate", indexToPopulate);
         
         indexToPopulate = indexToPopulate == -1 ? 5 : indexToPopulate
          this.setState({ templates2: this.dummyLists[indexToPopulate] });
            let e = {
               target: {
                   value:this.state.templates2[nextIndex]
               }
           }
          this.onChange2(e)
    };
      
    onChange2 = event => {
          
      this.setState({ defalutSelect2: event.target.value });
    };
      
       onClick = event => {
          event.preventDefault()
          let nextIndex = Math.floor(Math.random() * 6) + 1
          
            
           
           let e = {
               target: {
                   value:this.state.templates1[nextIndex]
               }
           }
          this.onChange1(e)
    };
  render() {
      
     
    return (
      <div className="App">
        <form>
          <label>
            Check the reflection
          </label>
        
        <button className="form-control" onClick={this.onClick}>Random</button>            
        <select className="form-control" value={this.state.defalutSelect1} onChange={this.onChange1}>
            
            {this.state.templates1.map(msgTemplate => (
                <option key={msgTemplate.id} value={msgTemplate}>
                    {msgTemplate}
                </option>
            ))}
        </select>


        <select className="form-control" value={this.state.defalutSelect2} onChange={this.onChange2}>

            {this.state.templates2.map(msgTemplate => (
                <option value={msgTemplate}>
                    {msgTemplate}
                </option>
            ))}
        </select>
        </form>
      </div>
    );
  }
}

export default App;
