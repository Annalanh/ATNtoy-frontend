import React, { Component } from 'react';
import SearchField from './SearchField';
import ProfilePanel from './ProfilePanel';
import { Link } from 'react-router-dom';
class NavBar extends Component{
    render(){
        return(
            <div className = "navbar">
                <div className = "container">    
                    <SearchField onSearchChanged = {this.props.onSearchChanged}/>
                        <div className = "col-5 text-center">
                            <h4>ATNcompany</h4>
                        </div>
                    <ProfilePanel username = {this.props.username} login = {this.props.login} onLogin = {this.props.onLogin}/>
                </div>
            </div>
        );
    }
}

export default NavBar;