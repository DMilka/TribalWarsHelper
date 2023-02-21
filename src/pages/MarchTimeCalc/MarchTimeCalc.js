import React, { useState } from 'react';
import DateTimePicker from '../../components/form/DateTimePicker';
import DateTimeHelper from '../../helpers/DateTimeHelper';
import Button from '../../components/button/Button';
import MarchTimeResult from './MarchTimeResult';
import TextField from '../../components/form/TextField';
import GeolocationHelper from '../../helpers/GeolocationHelper';

const UNIT_MARCH_TIME_MIN = {
    PIKEMAN: 18,
    SWORDFISH: 22,
    AXEMAN: 18,
    SCOUT: 9,
    LC: 10,
    HC: 11,
    BATTERING_RAM: 30,
    CATAPULT: 30,
    KNIGHT: 10,
    NOBLEMAN: 35
}
const MarchTimeCalc = () => {
    const [startDate, setStartDate] = useState(DateTimeHelper.getActualDate());
    const [attackerX, setAttackerX] = useState(null);
    const [attackerY, setAttackerY] = useState(null);
    const [finishDate, setFinishDate] = useState(DateTimeHelper.getActualDate());
    const [defenderX, setDefenderX] = useState(null);
    const [defenderY, setDefenderY] = useState(null);
    const [result, setResult] = useState(null);

  const startAttackCallback = (date) => {
        setStartDate(date);
    }
    const finishAttackCallback = (date) => {
        setFinishDate(date);
    }

    const calculateWhichTroops = () => {
        const distance = GeolocationHelper.getDistanceBetweenTwoPoint(attackerX,attackerY, defenderX,defenderY);

        const constantValueOfDistance = Math.floor(distance);
        const decimalValueOfDistance = distance - constantValueOfDistance;
        const decimalConvertedToMinutes = (decimalValueOfDistance * 60 / 100);

        const troopsResult = [];

        for(const key in UNIT_MARCH_TIME_MIN) {
            const marchTime = (UNIT_MARCH_TIME_MIN[key] * constantValueOfDistance + UNIT_MARCH_TIME_MIN[key] * decimalConvertedToMinutes);

            troopsResult.push({
              name: key,
              value: marchTime
            })
        }

        setResult(troopsResult)
    }

    return (
        <div style={{padding: 35, height: 'calc(100vh - 70px)'}}>
            <div style={{margin: 15}}>
                <DateTimePicker defaultDate={startDate} callback={startAttackCallback} label={'Godzina początku ataku'}/>
                <TextField style={{width: 300}} callback={(e => setAttackerX(e.target.value))} value={attackerX} label={"Współrzędne X wioski atakującego"} />
                <TextField style={{width: 300}} callback={(e => setAttackerY(e.target.value))} value={attackerY} label={"Współrzędne Y wioski atakującego"} />
            </div>
            <div style={{margin: 15}}>
                <DateTimePicker defaultDate={finishDate} callback={finishAttackCallback} label={'Godzina dojścia ataku ataku'}/>
                <TextField style={{width: 300}} callback={(e => setDefenderX(e.target.value))} value={defenderX} label={"Współrzędne X wioski broniącego"} />
                <TextField style={{width: 300}} callback={(e => setDefenderY(e.target.value))} value={defenderY} label={"Współrzędne Y wioski broniącego"} />
            </div>
            <div style={{margin: 15}}>
                <Button callback={calculateWhichTroops} buttonText={"Oblicz"}/>
            </div>
            <div style={{margin: 15}}>
                <MarchTimeResult result={result}/>
            </div>
        </div>
    );
};

export default MarchTimeCalc;