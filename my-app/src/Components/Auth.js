import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login'
import Register from './Register'

class Auth extends Component {

    state={
        page:"login"
    }
    pageChange=()=>{
        console.log("test")
        console.log(this.state.page)
        this.state.page=="login"?(this.setState({page:"register"})):(this.setState({page:"login"}))   
        console.log(this.state.page)   
    }
    login=async (e)=>{
        e.preventDefault()
        const {email, password } = e.target.elements;
        let User={email: email.value, password: password.value };
        try{
            let query="http://localhost:5000/login"
            let res=await axios.post(query, User)
            if(res.data.message=="existe"){
                alert("Bienvenu")
                console.log(res.data)
                this.props.Checklogin(res.data.User[0]._id)
            }else{
                alert("Password ou Email Incorrect")
            }
            //const response = await fetch('http://localhost:5000/login');
            //let User=await response.json();
            //console.log(User)
            //let res=await axios.get("http://localhost:5000/login").then((res)=>{(res.data.length>0)?this.props.CkeckLogin():alert("Password ou Email Incorrect")});
            //console.log(res);
            //setInterval(async()=>await axios.get('http://localhost:5000/Register/').then((res)=>(res.data.status=="added")? alert("Merci d'avoir s'inscrire"):console.log("User Not Added")),1000)
            //let res=await axios.get('http://localhost:5000/Register/').then((res)=>(res.data.status=="added")? alert("Merci d'avoir s'inscrire"):console.log("User Not Added"));
        }catch(err){
                console.log(err)
            }    
        }
render(){
    return(
    (this.state.page=="login")?<Login pageChnage={this.pageChange} login={this.login}/>:<Register pageChnage={this.pageChange}/>
    );
}

}



export default Auth;


