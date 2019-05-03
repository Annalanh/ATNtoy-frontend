import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ProductImage from '../components/ProductImage';
import axios from '../axios'
//import axios from 'axios';
import Footer from '../components/Footer';

class DetailScreen extends Component{
    state = {
        product: [],
        sold_num: 0,
        found: false
    };
    _handleTextChange = event => {
        this.setState({sold_num: event.target.value})
    }
    componentDidMount(){
        axios.get(`/api/stock/${this.props.match.params.productId}`)  
              .then(data => {
                setTimeout(() => {
                  this.setState({product: data.data, found: true});
                  console.log(data)
                }, 1000)
              })
              .catch(err => console.error(err))
    }
    _click = () => {
        this.props.handleUpdateSold(this.state.sold_num, this.props.match.params.productId);
        setTimeout(() => {
            axios.get(`/api/stock/${this.props.match.params.productId}`)  
            .then(data => {
              setTimeout(() => {
                this.setState({product: data.data, sold_num: 0});
              }, 1000)
            })
            .catch(err => console.error(err));
            alert("Updated sold number")            
        }, 2000)
    }
    _delete = () => {
        axios.delete(`/api/stock/${this.props.match.params.productId}`)
            .then(() =>{
                setTimeout(() =>{
                    this.setState({found: false})
                }, 1000)
            })
            .catch(err => console.error(err));
    }
    render(){
        const displayed = this.state.found?(
            <div className = "col-8 mr-auto ml-auto">
                <ProductImage product = {this.state.product} />
                <h6>Enter the number of new sold products</h6>
                <div className = "form-container">
                    <input className = "input-sold" onChange = {this._handleTextChange} className = "form-control" type = "text" placeholder= "sold" value = {this.state.sold_num}/>
                    <button className = "btn btn-secondary click" onClick  = {this._click}>Send</button>
                </div>
                <div className = "form-container">
                    <h6>Click here to delete the product</h6>
                    <button className = "btn btn-secondary click" onClick  = {this._delete}>Delete</button>
                </div>
            </div>
        ):(
            <h6>Product not found</h6>
        );
        return(
            <div>
                <NavBar onSearchChanged = {this.props.onSearchChanged} username = {this.props.username} login = {this.props.login} />
                <div className = "space"></div>  
                <div className = "main_content container">
                    <div className = "row">
                       {displayed}
                    </div>
                </div>
                <Footer />     
            </div>
        );
    }
}

export default DetailScreen;