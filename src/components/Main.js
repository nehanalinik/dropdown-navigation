import React from 'react'
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';
const Main = () => {
    return (
        <main className='main-container'>
            <div className="img-container">
                <div className="img"></div>
            </div>
            <div className="text-container">
                <h1>Make remote work</h1>
                <p className="desc">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className="cta">Learn More</button>
                <div className="clients-section">
                    <div className='clients'>
                        <img src={databiz} alt="databiz" />
                        <img src={audiophile} alt="audiophile" />
                        <img src={meet} alt="meet" />
                        <img src={maker} alt="maker" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main