import React, { Component } from 'react'
import config from '../config'

class ProductImage extends Component{
  
  render() {
    //const comments = this.props.img.comment.map(comment => <p><span className = "font-weigth-bold">{comment.createdBy.username}</span> : {comment.content}</p>)
    return(
      <div className = "girl_image">
        <img className = "img-fluid" src = {this.props.product.imageUrl}/>
        <h6>Product name: {this.props.product.productName}</h6>
        <h6>Price: {this.props.product.price}</h6>
        <h6>Current stock: {this.props.product.currentStock}</h6>
        {/* {comments} */}
      </div>
    )
  }
}

export default ProductImage