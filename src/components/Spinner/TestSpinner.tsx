import React, { useState } from 'react';

import { Wheel } from 'react-custom-roulette';

const data = [
    { option: 'REACT' },
    { option: 'CUSTOM' },
    { option: 'ROULETTE', style: { textColor: '#f9dd50' } },
    { option: 'WHEEL' },
    { option: 'REACT' },
    { option: 'CUSTOM' },
    { option: 'ROULETTE', style: { textColor: '#70bbe0' } },
    { option: 'WHEEL' },
];

const backgroundColors = ['#ff8f43', '#70bbe0', '#0b3351', '#f9dd50'];
const textColors = ['#0b3351'];
const outerBorderColor = '#eeeeee';
const outerBorderWidth = 10;
const innerBorderColor = '#30261a';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 8;
const fontFamily = 'Nunito';
const fontSize = 20;
const textDistance = 60;
const spinDuration = 0.6;

const App = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <div onClick={handleSpinClick} style={{cursor:'pointer'}}>
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={data}
                        backgroundColors={backgroundColors}
                        textColors={textColors}
                        fontFamily={fontFamily}
                        fontSize={fontSize}
                        outerBorderColor={outerBorderColor}
                        outerBorderWidth={outerBorderWidth}
                        innerRadius={innerRadius}
                        innerBorderColor={innerBorderColor}
                        innerBorderWidth={innerBorderWidth}
                        radiusLineColor={radiusLineColor}
                        radiusLineWidth={radiusLineWidth}
                        spinDuration={spinDuration}
                        startingOptionIndex={2}
                        // perpendicularText
                        textDistance={textDistance}
                        onStopSpinning={() => {
                            setMustSpin(false);
                        }}
                    />
                </div>
            </header>
        </div>
    );
};

export default App;