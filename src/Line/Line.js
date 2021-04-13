import React, { Component } from 'react';
import './Line.css'

class Line extends Component {
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
            <div className='Col0'>    
                    { this.state.Val.map((card, index) => {
                        let change = (card.Previous - card.Value).toFixed(2)
                        if (change >= 0) {
                            return ( 
                            <div className='Card__line' key={index} id={index}>
                            {card.CharCode} <span className='green'>{change}</span>
                            </div>)
                            } else {
                                return ( 
                                    <div className='Card__line' key={index} id={index}>
                                    {card.CharCode} <span className='red'>{change}</span>
                                    </div>)
                            }
                        
                    }) 
                    }
                    
            </div>
        )
    }
}

export default Line