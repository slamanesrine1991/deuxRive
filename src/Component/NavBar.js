import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Dashboard from './List'
import Home from './Home'
//import logo from '../img/logo.png';
import logo from '../img/logo-rive.png';
import { Input } from 'antd';
import { Link } from "react-router-dom";
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
 <div className='logoSearch'> 
 <div className='logo'> < Link component={Home}   to='/' ><img src={logo} alt="Logo"  
              /></Link></div> 
   
 
</div>  

               <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
               
        
        {/* <Menu.Item key="search">
        <Search
      placeholder="SEARCH"
      onSearch={value => console.log(value)}
      style={{   width: '120px'}}
    />
        </Menu.Item> 
        <Menu.Item key="logo" className='logo'>
        <img src={logo} alt="Logo" />
        </Menu.Item> */}
        <Menu.Item key="projet">  < Link component={Dashboard}   to='/projects' >Projets</Link>  </Menu.Item>
      
        <Menu.Item key="cent">Les cent </Menu.Item>
        
        <Menu.Item key="forum">Forum </Menu.Item>

        <Menu.Item key="contact">Contact        </Menu.Item>

        
      </Menu>   
            </div>
        )
    }
}






