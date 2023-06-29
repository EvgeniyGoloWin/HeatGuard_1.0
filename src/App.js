import 'normalize.css';
import '../src/assets/fonts/fonts.css';
import logo from '../src/assets/logo/Heat Guard Logo.png';
import slate from '../src/assets/img/Image_1.jpg';
import './App.css';

export function App() {
    return (
        <div className="App">
            <header className='header-container'>
                <div className='header'>
                    <img className='logo' src={logo} alt='logo'/>
                    <a className='header_link' href="https://INFO@HEATGUARD.IO">INFO@HEATGUARD.IO</a>
                </div>
            </header>
            <div className='title'>
                <h1>Enabling the Energy Transition</h1>
            </div>
            <div>
                <img className='slate' src={slate} alt='slate'/>
            </div>
            <div className='slate-text'>
                <p>
                    "IT HAS LONG BEEN KNOWN THAT THE CHEAPEST AND CLEANEST UNIT OF ENERGY IS THE ONE YOU DON’T NEED TO
                    USE."
                </p>
                <p> David Brooks, The Concord Monitor</p>
            </div>
        </div>
    );
}
