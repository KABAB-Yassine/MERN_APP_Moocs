import axios from 'axios';
import React, { Component } from 'react';
import './Cours.css';
import Video from './Video'

class Videos extends Component {

    state={
        chapitre:this.props.chapitre,
        cour:this.props.cour,
        Videos:this.props.Videos,
        Video_url:"001 Welcome.mp4"
    }
    affiche_Video=(e,url)=>{
        this.setState({Video_url:url})  
    }   
    ResearchVideo=(e)=>{ 
        let text=e.target.value;
        console.log(text)
        let FVideos=this.props.Videos.filter((e)=>e.name.toLowerCase().includes(text.toLowerCase()));
        this.setState({Videos:FVideos})
    }
render(){
    console.log(this.state.Videos)
    let Videos=this.state.Videos.map((e,key)=><Video  key={key} infos={{url_video:e.name}} affiche_Video={this.affiche_Video} />);
    return(
    <>
        <article>
        <input type="button"  value="back To Home" onClick={this.props.BackToHome} />
        <video width="1500" height="580" controls src={require("../Cours/"+this.state.cour+"/"+this.state.chapitre+"/"+this.state.Video_url)}>
        
        </video>
        </article>
        <aside>
            <div id="search">    
                <input  className='input1' type="text" placeholder="chercher un video ..." onChange={this.ResearchVideo}/>
            </div>
            {Videos}
        </aside>
    </>
    );
}
}


export default Videos;