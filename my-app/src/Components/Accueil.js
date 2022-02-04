import axios from 'axios';
import React, { Component } from 'react';
import './Cours.css';

class Accueil extends Component {

    state={
        Chapitres:this.props.Chapitres
    }      
render(){
    return(
    <>
        <article>
        {this.props.Cours}
        </article>
        <aside>
            <div id="search" >    
                Les Chapitres Du {this.props.cour}
            </div>
            {this.props.Chapitres}
        </aside>
    </>
    );
}
}


export default Accueil

















