import axios from 'axios';
import React, { Component } from 'react';
import './Cours.css';
import Cour from './Cour.js'
import Chapitre from './Chapitre'
import Videos from './Videos'
import Accueil from './Accueil'


class Cours extends Component {

    state={
        Cours:[],
        Chapitres:[],
        cour:"",
        Videos:[],
        page:"accueil"
    }
    async componentDidMount(){
        let query="http://localhost:5000/getCours"
        try{
        let cours=await axios.get(query);
        this.setState({Cours:cours.data})
        console.log(this.state.Cours)
        }catch(err){
            console.log(err)
        }
    }

    get_chapitres=async(e)=>{
        let query="http://localhost:5000/getCours/getChapitres/"+e.target.value
        console.log(query)
        try{
        let Chapitres=await axios.get(query);
        this.setState({Chapitres:Chapitres.data,cour:e.target.value})
        console.log(this.state.Chapitres)
        }catch(err){
            console.log(err)
        }
    }
    get_Videos=async(e,url,chapitre)=>{
        console.log(url)
        let query="http://localhost:5000/getCours/getVideos/"+url
        console.log(query)
        try{
        let Videos=await axios.get(query);
        this.setState({Videos:Videos.data,chapitre:chapitre})
        console.log(this.state.Videos)
        this.setState({page:"Videos"})
        }catch(err){
            console.log(err)
        }
    }
    BackToHome=()=>{
        this.setState({page:"accueil"})
        console.log("back to Home")
    }
    
render(){
    let Cours=this.state.Cours.map((e)=><Cour  key={e.title} infos={{url_img:e.img,title:e.title}} affiche_chapitre={this.get_chapitres} />);
    let Chapitres=this.state.Chapitres.map((e,key)=><Chapitre  key={key} infos={{title:this.state.cour,chapitre:e}} get_Videos={this.get_Videos} />);
    return(
    <>
    <header>
        <h1>Moocs Kabab</h1>
        <input type="button"  value="Deconnection" onClick={this.props.logout} />
    </header>
    <section>
        {(this.state.page=="accueil")?
        <Accueil Cours={Cours} cour={this.state.cour} Chapitres={Chapitres} logout={this.props.logout} FChapitres={this.state.Chapitres}/>:
        <Videos cour={this.state.cour} Videos={this.state.Videos} BackToHome={this.BackToHome} chapitre={this.state.chapitre}/>}
    </section>
    <footer>A cause de forger on devient forgeron</footer>
    </>
    );
}
}


export default Cours;