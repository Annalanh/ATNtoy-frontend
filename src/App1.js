import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App1 extends Component {
  state = {
    products: [],
    sold_num: 0,
    login: true
  }
  componentDidMount(){
    axios.get("http://localhost:6969/api/stock")  
      .then(data => {
        setTimeout(() => {
          this.setState({products: data.data.data})
        }, 1000)
      
    })
        .catch(err => console.error(err))
  }
  _handleTextChange = event => {
    this.setState({sold_num: event.target.value})
  }
  _handleUpdateSold = () => {
    let sold = this.state.sold_num;
    console.log(sold)
    axios({
      url: 'http://localhost:6969/api/stock/5cc965e1fc61f3127845ec59',
      method: 'put',
      data: {
        sold: sold
      }
    })
    .then(data => {
      setTimeout(() => {
        this.setState({products: data.data});
      }, 1000)
    })
    .catch(err => console.error(err))

  }
  render(){
    console.log(this.state.products)
    console.log(this.state.sold_num)
    return (
      <div className="App">
        
          <input onChange = {this._handleTextChange} className = "form-control" type = "text" placeholder= "sold"/>
          <button onClick = {this._handleUpdateSold}>Send</button>
      
      </div>
    );
  }
}

export default App1;
