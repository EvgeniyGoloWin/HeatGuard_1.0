import 'normalize.css';
import logo from '../src/assets/logo/Heat Guard Logo.png';
import hot from '../src/assets/img/Infographic spec_1.jpg';
import slate from '../src/assets/img/Image_1.jpg';
import book from '../src/assets/img/book.png';
import book2 from '../src/assets/img/book2.png';
import battery from '../src/assets/img/Infographic spec_2.jpg';
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
            <div className='slate-photo'>
                <img className='slate' src={slate} alt='slate'/>
            </div>
            <div className='slate-text'>
                <p>
                    "IT HAS LONG BEEN KNOWN THAT THE CHEAPEST AND CLEANEST UNIT OF ENERGY IS THE ONE YOU DON’T NEED TO
                    USE."
                </p>
                <p className='david-text'> David Brooks, The Concord Monitor</p>
            </div>
            <div className='block-technology'>
                <p className='title-text'>OUR UNIQUE TECHNOLOGY</p>
                <p className='description-text'>HeatGuard is a unique energy transition solution to combat greenhouse
                    gas emissions and alleviate our global energy crisis.
                    Our unique HeatGuard technology delivers a 20 per cent reduction in the energy required to heat
                    buildings. Installation of
                    8 m2 of HeatGuard in buildings avoids approximately 1 tonne of greenhouse gas emissions (GHG)
                    annually.</p>
            </div>
            <div className='wrapper-section'>
                <div className="section">
                    <p className='title-text'>HOW HEATGUARD WORKS</p>
                    <p className='description-text'>In physics, the second law of thermodynamics shows that hot will
                        move
                        toward cold.</p>
                    <img className='hot-photo' src={hot} alt="hot"/>
                    <p className='description-text'>HeatGuard provides a barrier against heat loss and our patented
                        profile
                        encourages the natural flow of warm air upwards
                        and into the centre of the room through the creation of manifold vortices as the air flows over
                        the
                        panel surface.</p>
                </div>
            </div>
            <div className='wrapper-section_2'>
                <div className='section_2'>
                    <div className='content-left'>
                        <img className='book-photo' src={book} alt='book'/>
                    </div>
                    <div className='content-right'>
                        <p className='title-text'>OUR PROOF FROM MULTIPLE TESTS</p>
                        <p className='test-text'>TEST 1: University of Detroit Mercy, USA (2019-2021)</p>
                        <p className='description-text'>Key findings: “The Panel installation was completed on 19th
                            January
                            2020. Due to Covid-19 the data was only processed in 2021. Compared
                            to the data of 2019 the new data collected showed over 26% energy
                            savings…”</p>

                        <p className='test-text'>TEST 2: Orly, France (2013)</p>
                        <p className='description-text'>Key findings: This independently verified study in Orly,
                            Val-De-Marne,
                            France produced an average of 20 per cent fuel savings in the nine test
                            apartments in a two year old building.
                            We installed an average of 8 Panels per apartment. The hot water was
                            pumped directly from the geothermal plant at Orly, France to individually metered radiators
                            in
                            each apartment.</p>

                        <p className='test-text'>TEST 3: Harwell Science and Innovation Campus UK (1987)</p>
                        <p className='description-text'>Key findings:“... the figure... (26.8%) represents the overall
                            percentage
                            fuel saving from the panel in conditions modelled.”
                            “... a brief discussion of the transient effect of night-time setback in
                            radiator temperature suggests that transient heat losses would also be significantly reduced
                            by
                            the use of the panel.”</p>
                    </div>
                </div>
            </div>
            <div className='wrapper-section_3'>
                <div className="section_3">
                    <p className='title-text'>THE KEY BENEFIT OF HEATGUARD TECHNOLOGY</p>
                    <p className='description-text'>The results from our in situ tests demonstrate the key benefit of
                        HeatGuard technology: water is returned to the boiler at
                        a higher temperature after installing HeatGuard. This delivers an economically significant
                        reduction
                        in heat loss and therefore energy consumption and the corollary carbon emissions</p>
                    <img className='battery-photo' src={battery} alt="battery"/>
                </div>
            </div>
            <div className='wrapper-section_4'>
                <div className='section_4'>
                    <div className='content-left'>
                        <p className='title-text'>ABOUT US</p>
                        <p className='test-text '>Doug Tolmer</p>
                        <p className='description-text'>Doug Tolmer guided the invention and early production of
                            HeatGuard
                            panel technology. Despite early success in the UK market in the late 80s,
                            the focus on energy efficiency and the urgent need to reduce greenhouse gas emissions (GHG)
                            was
                            a low priority and the rollout stalled.</p>
                        <p className='description-text'>
                            Now in 2023 there is an urgent need for effective and rapidly deployable technologies to
                            reduce
                            energy costs and combat the global environmental crisis.
                        </p>
                            <p className='description-text'>
                            HeatGuard is well placed to facilitate energy distributors, energy service companies
                            (ESCOs),
                            property managers and government agencies
                            to participate in the emerging carbon markets, which are a key policy
                            instrument to drive systemic transformation.</p>
                        <p className='test-text '>Chlöe Tolmer </p>
                        <p className='description-text'>In charge of Operations. </p>
                        <p className='test-text '>Arpad Maksay </p>
                        <p className='description-text'>In charge of Distribution, Marketing & Sales. </p>
                    </div>
                    <div className='content-right'>
                        <img className='book-photo' src={book2} alt='book'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
