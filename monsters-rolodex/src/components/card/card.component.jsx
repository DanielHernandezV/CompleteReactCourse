import { Component } from "react";
import { useEffect,useState } from "react";

import './card.styles.css';



const Card = ({monster: {name, email, id}}) => (
    <div className='card-container' key={id} >
        <img alt={'monster '+ name} src={'https://robohash.org/' + id + '?set=set2&size=180x180' }/>
        <h2 >{name}</h2>
        <p> {email}</p>
    </div>
)




/* class Card extends Component{


    render () {
        
        const {name, email, id} = this.props.monster;

        return (

            <div className='card-container' key={id} >
            <img alt={'monster '+ name} src={'https://robohash.org/' + id + '?set=set2&size=180x180' }/>
            <h2 >{name}</h2>
            <p> {email}</p>
            </div>


        )
    }
} */

export default Card;