import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../axios';
class Create extends Component{
    state = {
        name: "",
        initial:0,
        sold:0,
        url:"",
        price:0,
        deleted: true
    }
    _createProduct = (e) => {
        e.preventDefault();
        console.log("created")
        axios({
            url: '/api/stock/',
            method: 'post',
            data: {
              productName: this.state.name,
              price: this.state.price,
              initialStock: this.state.initial,
              sold: this.state.sold,
              imageUrl: this.state.url
            }
          })
          .then(() => {
            setTimeout(() => {
              this.setState({deleted: false})
            }, 2000)
          })
          .catch(err => console.error(err))
    }
    _changeName = (e) => {
        let newName = e.target.value;
        this.setState({name: newName});
        setTimeout(() => {
            console.log(this.state.name)
        }, 1000)
    }
    _changeInitial = (e) => {
        let newInitial = e.target.value;
        this.setState({initial: newInitial});
    }
    _changeSold = (e) => {
        let newSold = e.target.value;
        this.setState({sold: newSold});
    }
    _changeUrl = (e) => {
        let newUrl = e.target.value;
        this.setState({url: newUrl});
    }
    _changePrice = (e) => {
        let newPrice = e.target.value;
        this.setState({price: newPrice});
    }
    render(){
        const displayed = this.state.deleted?(
            <div>
                <form>
                    <div className = "form-group">
                        <label>Product name:</label>
                        <input type="text" onChange = {this._changeName} className="form-control"/>
                    </div>
                    <div className = "form-group">
                        <label>Initial stock:</label>
                        <input type="text" onChange = {this._changeInitial} className="form-control"/>
                    </div>
                    <div className = "form-group">
                        <label>Sold:</label>
                        <input type="text" onChange = {this._changeSold} className="form-control"/>
                    </div>
                    <div className = "form-group">
                        <label>Image Url:</label>
                        <input type="text" onChange = {this._changeUrl} className="form-control"/>
                    </div>
                    <div className = "form-group">
                        <label>Price</label>
                        <input type="text" onChange = {this._changePrice} className="form-control"/>
                    </div>
                </form>
                <button className = "btn btn-secondary" onClick = {this._createProduct}>Create</button>
            </div>
        ):(
            <div>
                <h4>New Product created</h4>
            </div>
        );
        return(
            <div className = "container">
                {displayed}
            </div>
        );
    }
}

export default Create;