import logo from './logo.svg';
import './App.css';
import Auth from './Components/Auth';
import Cours from './Components/Cours';
import { Component } from 'react';


class  App extends Component{
  state={
    login:false,
    id_user:null,
  }

  Checklogin=(id_user)=>{
    console.log(id_user)
    if(this.state.login==false){this.setState({login:true,id_user:id_user})}
  }
  logout=()=>{
    this.setState({login:false})
  }

  render(){
  return (
    <>
    {(this.state.login==false)?
    <Auth Checklogin={this.Checklogin}/>:<Cours logout={this.logout} id_user={this.state.id_user}/>}
    </>
  );
}
}

export default App;
