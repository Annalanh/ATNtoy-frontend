import React, { Component } from 'react'
import ProductImage from './ProductImage';
import { Link } from 'react-router-dom';

class MainContent extends Component{
    render(){
        const allProducts = this.props.products.map(pro => 
        <div className = "col-3" key = {pro._id}>
            <Link to = {`/stock/${pro._id}`}>
                <ProductImage product = {pro} />
            </Link>
        </div>)
        return(
            <div className = "container">
                <div className = "row">
                    {allProducts}
                </div>
            </div>
        )
    }
}
export default MainContent