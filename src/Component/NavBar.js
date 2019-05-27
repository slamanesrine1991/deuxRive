import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import logo from '../img/logo.png';
import { Input } from 'antd';

import { Menu, Icon } from 'antd';
const Search = Input.Search;
export default class NavBar extends React.Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    
    render() {
        return (
            <div className='navBar'>
               <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="logo" className='logo'>
        <img src={logo} alt="Logo" />
        </Menu.Item>
        <Menu.Item key="search">
        <Search
        
      placeholder="Search"
      onSearch={value => console.log(value)}
      style={{   width: '150px'}}
    />
        </Menu.Item>




        <Menu.Item key="app" >
         
         Projets
        </Menu.Item>
      
        <Menu.Item key="apay">
         
            Les cent
     
        </Menu.Item>

        <Menu.Item key="alpay">
         
            Forum
       
        </Menu.Item>

        <Menu.Item key="alip">
        
            Contact
    
        </Menu.Item>
      </Menu>   
            </div>
        )
    }
}






