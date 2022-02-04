import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

class Register extends Component {
    
    Register=async (e)=>{
        e.preventDefault()
        const {email, password } = e.target.elements
        console.log({email: email.value, password: password.value })
        let User={email: email.value, password: password.value,cours:[]};
        try{
        let query="http://localhost:5000/Register";
        let resp=await axios.post(query,User);
        if(resp.data.message=="User Created"){
            alert("User Created");
            this.props.pageChnage();
        }else{
            alert("User not Created")
        }
    }catch(err){
        console.log(err)
    }
    }
    
render(){
    return(
    <>
    <div className="main">
    <p className="sign" align="center">Inscription</p>
    <form className="form1"  onSubmit={this.Register} >
    <input className="un" type="Email"  name="email" align="center" placeholder="Email" />
    <input className="pass" type="password" name="password" align="center" placeholder="Password" /> 
      <input type="submit" className="submit" align="center" value="S'Inscrire"/>
      <p className="forgot" align="center" onClick={this.props.pageChnage} >Se Connecter</p>      
    </form>     
    </div>
    </>
    );
}

}



export default Register;