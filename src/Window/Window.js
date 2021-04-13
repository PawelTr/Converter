import React, { Component } from 'react';
import Calc from '../Calc/Calc'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Line from '../Line/Line'
import './Window.css'

class Window extends Component {
    constructor(props){
        super(props);
        this.state = {
            Val: [0],
            ActiveVal1 : 'SEK',
            ActiveVal2 : 'USD',
        };

        this.changeActiveVal1 = this.changeActiveVal1.bind(this);
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

    changeActiveVal1 = (newVal) => {
        this.setState({
            ActiveVal1: newVal,
        })
        let c = this.state.Val.filter ((i)=> i.CharCode === newVal);
        let d = this.state.Val.filter ((i)=> i.CharCode === this.state.ActiveVal2);
        let newCost = (this.state.Sum * c[0].Value / d[0].Value ).toFixed(3) 
        this.setState({
            Cost2: newCost,
    })}

    changeActiveVal2 = (newVal) => {
        this.setState({
            ActiveVal2: newVal,
        })
        let c = this.state.Val.filter ((i)=> i.CharCode === this.state.ActiveVal1);
        let d = this.state.Val.filter ((i)=> i.CharCode === newVal);
        let newSum = (this.state.Cost2 / c[0].Value * d[0].Value ).toFixed(3) 
        this.setState({
            
            Sum: newSum,
        })
    }

    changeCost = (event) => {

        let c = this.state.Val.filter ((i)=> i.CharCode === this.state.ActiveVal1);
        let d = this.state.Val.filter ((i)=> i.CharCode === this.state.ActiveVal2);
        let newCost = (event.target.value * c[0].Value / d[0].Value ).toFixed(3) 
         this.setState ({
             Cost2: newCost,
             Sum : event.target.value,
         })       
    }

    changeSum = (event) => {

        let c = this.state.Val.filter ((i)=> i.CharCode === this.state.ActiveVal1);
        let d = this.state.Val.filter ((i)=> i.CharCode === this.state.ActiveVal2);
        let newSum = (event.target.value / c[0].Value * d[0].Value ).toFixed(3) 
         this.setState ({
             Sum : newSum,
             Cost2: event.target.value,
         })       
    }

    changeWallet = (event) => {
        let wal = event.target.value 
        this.setState ({ActiveWall: wal})
    }
   

    render() {
        return (
            <div className='Main'>
            <Header />
            <div className='Line'>
            <Line/>
            </div>
            
            <div className='AllVals'>
                <div className='Row1'>
                    <Card 
                        changeActiveVal = {this.changeActiveVal1}
                    />
                </div>
                <div className='Row2'>
                    <Card 
                        changeActiveVal = {this.changeActiveVal2}
                    />
                </div>

                <div className='Col2'>
                    <Calc 
                    val1={this.state.ActiveVal1} 
                    val2={this.state.ActiveVal2} 
                    onChange1 = {this.changeCost} 
                    onChange2 = {this.changeSum} 
                    cost1 = {this.state.Sum} 
                    cost2 = {this.state.Cost2} 
                    onChangeWallet = {this.changeWallet} />
                </div>
                
            </div>
            </div>
        )
    }
}

export default Window