import axios from 'axios';
import React, { Component } from 'react';
import './Cours.css';

class Cour extends Component {

render(){     
    return(
        <>
        <div class="article">
                <img class="artimg"  src={require("../Cours/"+this.props.infos.title+"/"+this.props.infos.url_img)} />
                <div class="info">
                <div className="title1">
                   {this.props.infos.title}
                </div>
                <button class="detailsBtn" onClick={this.props.affiche_chapitre} value={this.props.infos.title}>View CHapitres</button>
                </div>
        </div>
        </>
        )
}
}


export default Cour;