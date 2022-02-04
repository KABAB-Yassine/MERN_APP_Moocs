import axios from 'axios';
import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    state={
    }
    
    // login=async (e)=>{
    // e.preventDefault()
    // const {email, password } = e.target.elements;
    // let User={email: email.value, password: password.value };
    // try{
    //     let query="http://localhost:5000/login"
    //     let res=await axios.post(query, User)
    //     if(res.data.message=="existe"){
    //         alert("Bienvenu")
    //     }else{
    //         alert("Password ou Email Incorrect")
    //     }
    //     //const response = await fetch('http://localhost:5000/login');
    //     //let User=await response.json();
    //     //console.log(User)
    //     //let res=await axios.get("http://localhost:5000/login").then((res)=>{(res.data.length>0)?this.props.CkeckLogin():alert("Password ou Email Incorrect")});
    //     //console.log(res);
    //     //setInterval(async()=>await axios.get('http://localhost:5000/Register/').then((res)=>(res.data.status=="added")? alert("Merci d'avoir s'inscrire"):console.log("User Not Added")),1000)
    //     //let res=await axios.get('http://localhost:5000/Register/').then((res)=>(res.data.status=="added")? alert("Merci d'avoir s'inscrire"):console.log("User Not Added"));
    // }catch(err){
    //         console.log(err)
    //     }    
    // }
render(){
    return(
    <>
    <div className="main">
    <p className="sign" align="center">Se Connecter</p>
    <form className="form1" onSubmit={this.props.login} >
      <input className="un " type="Email" name="email" align="center" placeholder="Email" />
      <input className="pass" type="password"  name="password" align="center" placeholder="Password" />
      <input type="submit" className="submit" align="center"  value="Sign in"/>
      <p className="forgot" align="center"  onClick={this.props.pageChnage} >S'Inscrire</p>
    </form>     
    </div>
    </>
    );
}

}



export default Login;


