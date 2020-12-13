import React, { Component } from 'react';

class BinaryDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2,
        };

        this.toggleBit = this.toggleBit.bind(this);
    }

    toggleBit(bit) {
        this.setState(state => ({
            value: this.state.value^(1<<bit)
        }));
    }
    
    render() {
        let strval = (this.state.value>>>0).toString(2).padStart(32,'0');

        const bits = [];
        const help = [];
        for(let i=0; i<32; i++) {
            let b = 31-i;
            let bitClass    =(b%8===0)?"bit bithelp"     :"bit"            
            let bithelpClass=(b%8===0)?"bitcount bithelp":"bitcount"

            bits.push(<td key={b} className={bitClass} onClick={() => this.toggleBit(b)}>{strval.charAt(i)}</td>);
            help.push(<td key={b} className={bithelpClass}>{(b%8===0)?b:""}</td>);
        }

        return (
            <table className="bittable">
                <tbody>
                    <tr>
                        {bits}
                    </tr>
                    <tr>
                        {help}
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default BinaryDisplay;
