import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';
const crn = require('./crn.js');
let request = require('request');

class App extends Component {
    render() {
        return (
            <div className = "App" >
                <label >
                CRN:
                    <CRN / >
                </label>
            </div>
        );
    }
}

class CRN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        event.preventDefault();
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        let t = crn.getData(String(this.state.value));
        t.then((value) => {console.log(JSON.stringify(value))});
        event.preventDefault();
    }

    handleEnter(event) {
        this.state.value = "MARK 220 - 04"
     }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                You typed: <code>{this.state.value}</code>
              </label>
              <input type="submit" value="Submit" />
            </form>
         );

    }
}

export default App;
