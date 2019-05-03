import React, { Component } from 'react'
import ProductImage from './ProductImage';

class Footer extends Component{
    render(){
        return(
            <footer className="pt-4 my-md-5 pt-md-5 border-top bg-light">
            <div className="row">
                <div className="col-12 col-md">
                    <h6>ATNCompany</h6>
                    <small className="d-block mb-3 text-muted">We are toy company</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Categories</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted">Car</a></li>
                        <li><a className="text-muted">Animals</a></li>
                        <li><a className="text-muted">Houses</a></li>
                        <li><a className="text-muted">Barbies</a></li>
                        <li><a className="text-muted">Cooking</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Supplier</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted">Vinmart</a></li>
                        <li><a className="text-muted">BigC</a></li>
                        <li><a className="text-muted">Metro Supermarket</a></li>
                        <li><a className="text-muted">Circle K</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted">Team</a></li>
                        <li><a className="text-muted">Locations</a></li>
                        <li><a className="text-muted">Privacy</a></li>
                        <li><a className="text-muted">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        )
    }
}
export default Footer