import React, { Component } from 'react';

class Table extends Component{
    render(){
        const documents = this.props.products.map(pro => 
            <tr>
                <td>{pro.productName}</td>
                <td>{pro.price}</td>
                <td>{pro.initialStock}</td>
                <td>{pro.currentStock}</td>
                <td>{pro.sold}</td>
                <td>{pro.revenue}</td>                           
            </tr>)
        return(
            <div className = "container">
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Ininital stock</th>
                        <th scope="col">Current stock</th>
                        <th scope="col">Sold number</th>
                        <th scope="col">Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {documents}
                </tbody>
            </table>
            </div>
        );
    }
}

export default Table;