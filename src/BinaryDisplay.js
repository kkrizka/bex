import React, { Component } from 'react';

class BinaryDisplay extends Component {
    constructor(props) {
        super(props);

        this.toggleBit = this.toggleBit.bind(this);
    }

    toggleBit(bit) {
        let newvalue=this.props.value^(1<<bit)

        this.props.onChange(newvalue)
    }
    
    render() {
        let strval = (this.props.value>>>0).toString(2).padStart(32,'0');

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
