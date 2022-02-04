import axios from 'axios';
import React, { Component } from 'react';
import './Cours.css';

class Video extends Component {

render(){     
    return(
        <>
        <div className="panier" id="panier" onClick={(e)=>this.props.affiche_Video(e,this.props.infos.url_video)}>
                <div class="chartitem">
                    <div class="prodname">{this.props.infos.url_video}</div>
                    <div class="qtt">{this.props.infos.key}</div>
                </div>
        </div>
        </>
        )
}
}


export default Video;