import React, {Component} from "react"

import BinaryDisplay from "./BinaryDisplay.js"

function checkBin(n){return/^[01]{1,64}$/.test(n)}
function checkDec(n){return/^[0-9]{1,64}$/.test(n)}
function checkHex(n){return/^[0-9A-Fa-f]{1,64}$/.test(n)}

class BeX extends Component {
    state = {value: 0}

    constructor(props) {
        super(props);

        this.setValue      = this.setValue.bind(this);
        this.bitshiftLeft  = this.bitshiftLeft.bind(this);
        this.bitshiftRight = this.bitshiftRight.bind(this);
        this.handleHexInput= this.handleHexInput.bind(this);
        this.handleDecInput= this.handleDecInput.bind(this);
        this.handleBinInput= this.handleBinInput.bind(this);
    }

    setValue(value) {
        console.log("setValue",value)

        this.setState({value: value})
    }
    
    bitshiftLeft() {
        this.setValue(this.state.value<< 1);
    }

    bitshiftRight() {
        this.setValue(this.state.value>>>1);
    }

    handleHexInput(e) {
        if(!checkHex(e.target.value))
        { e.preventDefault(); }
        this.setValue(parseInt(e.target.value, 16));
    }

    handleDecInput(e) {
        if(!checkDec(e.target.value))
        { e.preventDefault(); }
        this.setValue(parseInt(e.target.value, 10));
    }

    handleBinInput(e) {
        if(!checkBin(e.target.value))
        { e.preventDefault(); }
        this.setValue(parseInt(e.target.value,  2));
    }
    
    render() {
        const valueHex=this.state.value.toString(16);
        const valueDec=this.state.value.toString(10);
        const valueBin=this.state.value.toString( 2);
        
        return (
            <div>
                <div className="bexinputs">
                    <span className="input hex">Hex:     <input type="text" value={valueHex} onChange={this.handleHexInput} /></span>
                    <span className="input dec">Decimal: <input type="text" value={valueDec} onChange={this.handleDecInput} /></span>
                    <span className="input bin">Binary:  <input type="text" value={valueBin} onChange={this.handleBinInput} /></span>
                </div>
                <BinaryDisplay ref={this.display} value={this.state.value} onChange={this.setValue} />
                <div className="operations">
                    <input type="button" value="<<" onClick={this.bitshiftLeft} />
                    <input type="button" value=">>" onClick={this.bitshiftRight} />
                </div>
            </div>
               )
    }
}

export default BeX
