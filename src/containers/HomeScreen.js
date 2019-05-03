import React, { Component } from 'react';
//import axiosInstance from '../axios'
import axios from '../axios';
import MainContent from '../components/MainContent';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
class HomeScreen extends Component{
    state = {
        products: [],
        searchString: "",
    };
    componentDidMount(){
        axios.get("/api/stock")  
            .then(data => {
                setTimeout(() => {
                  this.setState({products: data.data.data})
                }, 1000)
              })
            .catch(err => console.error(err))
    }
    _onSearchChanged = text => this.setState({searchString: text});
    render(){
        const displayedProducts = this.state.products.filter(pro => pro.productName.includes(this.state.searchString));
        const allowed = this.props.login?(
          <div className="App">
            <Navbar onSearchChanged = {this._onSearchChanged} login = {this.props.login} username = {this.props.username} />  
            <div className = "space container">
              <div className = "row">
                <Link to = {`/transaction`}>
                  <button className = "btn btn-outline-dark main-func">Click to see transaction</button>
                </Link>
                <Link to = {`/create`}>
                  <button className = "btn btn-outline-dark main-func">Click to create new product</button>
                </Link>
              </div>
            </div>  
            <MainContent products = {displayedProducts} />
            <Footer />
          </div>
        ):(
          <div>
            <Navbar onSearchChanged = {this._onSearchChanged} onLogin = {this.props.onLogin}/>
            <h4 className = "text-center login">Please log in first</h4>
          </div>
        )
        return(
          <div>{allowed}</div>
        )
    }
}

export default HomeScreen;