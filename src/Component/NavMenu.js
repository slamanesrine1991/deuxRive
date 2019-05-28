import React, { Component } from 'react'
import logo from '../img/logo.png';
import 'antd/dist/antd.css';
import { Input } from 'antd';
const Search = Input.Search;
export default class NavMenu extends Component {
    render() {
        return (
            <div className='NavMenu'>
               <div>
               <img src={logo} alt="Logo" />
                   
                   </div> 
                <div>
              
    <ul className='NavItem'>
        <li >  <Search
      placeholder="SEARCH"
      onSearch={value => console.log(value)}
      style={{   width: '150px'}}
    /></li>
        <li> Projets</li>
        <li>Les cent</li>
        <li>Forum</li>
        <li>Contact</li>
        <li>En</li>


    </ul>
                    
                    
                    </div>   
            </div>
        )
    }
}
