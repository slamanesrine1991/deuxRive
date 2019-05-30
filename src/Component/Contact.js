import React, { Component } from 'react'
import './contact.css';
import { Button, Icon } from 'antd';
export default class  extends Component {
    render() {
        return (
            <div className='contact-Container'>
                <div> <h1>CONTACTEZ <br></br>NOUS </h1> </div>
           
<form className='contactForm'>
<label >Nom</label>
    <input type="text" name="firstname" placeholder="Votre nom.."></input>
    <label >mail</label>
    <input type="email"  name="mail" placeholder="Votre prénom.."></input>

    <label >Message</label>
    <textarea name="subject" placeholder="Votre message.." ></textarea>

    <Button type="primary">
           Envoyer
           <Icon type="arrow-right" />
            </Button>


</form>
           </div>      
         
        )
    }
}
