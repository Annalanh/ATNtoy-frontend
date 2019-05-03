import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Table from '../components/Table';
import axios from '../axios';

class Transaction extends Component{
    state = {
        products: []
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
    render(){
        return(
            <div>
                <NavBar login = {this.props.login} username = {this.props.username} />
                <div className = "space"></div>  
                <div className = "container">
                    <Table products = {this.state.products} />
                </div>
            </div>
        );
    }
}

export default Transaction;