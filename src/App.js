import React, { Component } from 'react';
import axios from './axios';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeScreen from './containers/HomeScreen';
import DetailScreen from './containers/DetailScreen';
import { BrowserRouter, Route } from 'react-router-dom';
import Transaction from './containers/Transaction';
import Create from './containers/Create';

class App extends Component {
  state = {
    products: [],
    login: false,
    username: ""
  }
  _onLogin = () => {
    this.setState({
      username: "admin",
      login: true
    });
  }
  componentDidMount(){
    axios.get("/api/stock")  
        .then(data => {
            setTimeout(() => {
              this.setState({products: data.data.data});
            }, 1000)
          })
        .catch(err => console.error(err))
  }
  _handleUpdateSold = (sold_num, productId) => {
    console.log("repeated");
    axios({
      url: 'http://localhost:6969/api/stock/'+productId,
      method: 'put',
      data: {
        sold: sold_num
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
    return (
      <BrowserRouter>
        <div className = "App">
          <Route exact path = "/" render = {(props) => {
            return <HomeScreen {...props} onLogin = {this._onLogin} login = {this.state.login} username = {this.state.username}/>}
          }/>
          <Route path = "/transaction" render = {props => {
            return <Transaction {...props} login = {this.state.login} username = {this.state.username} />
          }} />
          <Route path = "/create" render = {props => {
            return <Create />
          }} />
          <Route path = "/stock/:productId" render = {props => {
            return <DetailScreen 
              {...props}
              onLogin = {this._onLogin} 
              login = {this.state.login}
              username = {this.state.username} 
              handleUpdateSold = {this._handleUpdateSold}
            />
          }}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
