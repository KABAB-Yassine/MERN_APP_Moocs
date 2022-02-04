import axios from 'axios';
import React, { Component } from 'react';
import './Cours.css';

class Chapitre extends Component {

render(){
        return(
        <>
        <div className="panier" id="panier" onClick={(e)=>this.props.get_Videos(e,this.props.infos.title+'/'+this.props.infos.chapitre,this.props.infos.chapitre)}>
                <div class="chartitem">
                    <div class="prodname">{this.props.infos.chapitre}</div>
                    <div class="qtt">{this.props.infos.key}</div>
                </div>
        </div>
        </>
        )
}
}


export default Chapitre;