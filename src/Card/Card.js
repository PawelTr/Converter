import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
        Val: [0],
        };
    }

    componentDidMount() {
        fetch( 'https://www.cbr-xml-daily.ru/daily_json.js')
        .then( data => {
            return data.json();
        })
        .then(data => {
            let arr = Object.values(data.Valute)
            this.setState({Val: arr})
        })
    }

    render() {
        return (
            <div className='Col1'>    
                    { this.state.Val.map((card, index) => {
                        return ( 
                            <button className='Card' key={index} symbol = {card.CharCode} id={card.CharCode} onClick={() => {this.props.changeActiveVal(card.CharCode)}} >
                            {card.Name}
                            </button>)
                    }) 
                    }
                </div>
        )
    }
}

export default Card