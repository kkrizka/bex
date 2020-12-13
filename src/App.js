import BeX from './BeX.js'
import './App.css';
import './BinaryDisplay.css';
import './ops.css';

function App() {
    return (
            <div className="App">
            <h1>Binary - dEcimal - heXadecimal Converter</h1>
            <BeX />

            <div id="footer">
            a bored KK production - <a href="https://github.com/kkrizka/bex">Code</a> / <a href="https://github.com/kkrizka/bex/labels/bug">Bugs</a> / <a href="https://github.com/kkrizka/bex/labels/enhancement">Requests</a>
            </div>
            
        </div>    
    );
}

export default App;
