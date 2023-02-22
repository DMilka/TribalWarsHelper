import React, { useState } from 'react';
import DateTimePicker from '../../components/form/DateTimePicker';
import DateTimeHelper from '../../helpers/DateTimeHelper';
import Button from '../../components/button/Button';
import MarchTimeResult from './MarchTimeResult';
import TextField from '../../components/form/TextField';
import GeolocationHelper from '../../helpers/GeolocationHelper';
import TroopsHelper from '../../helpers/TroopsHelper';
import GridContainer from '../../components/grid/GridContainer';
import GridItem from '../../components/grid/GridItem';
import { styled } from '@mui/material';

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

    const resetForm = () => {
        setStartDate(DateTimeHelper.getActualDate());
        setFinishDate(DateTimeHelper.getActualDate());
        setAttackerX(null);
        setAttackerY(null);
        setDefenderX(null);
        setDefenderY(null);
        setResult(null);
    }

    const calculateWhichTroops = () => {
        const distance = GeolocationHelper.getDistanceBetweenTwoPoint(attackerX,attackerY, defenderX,defenderY);
        const timeDifference = DateTimeHelper.getDifferenceBetweenTwoDates(startDate, finishDate);

        const troopsResult = [];
        for(const key in TroopsHelper.UNIT_MARCH_TIME_MIN) {
            // Calculate how long unit will go.
            const marchTime = (TroopsHelper.UNIT_MARCH_TIME_MIN[key] * distance);

            // Separate decimal part because it gave value between 0 - 100 in time we have range 0 - 60
            const constantValueOfDistance = Math.floor(marchTime);
            const decimalValueOfDistance = marchTime - constantValueOfDistance;

            // Convert decimal part of number to minutes
            const decimalConvertedToMinutes = (decimalValueOfDistance * 60 / 100);

            // Calculate final time by adding constant value of distance + converted decimal part to minutes
            const finalMarchTime = (constantValueOfDistance + decimalConvertedToMinutes).toFixed(2);

            // Calculate for all unit, get status 1 - if this unit could be in attack, 0 if it could NOT be in attack
            troopsResult.push({
              name: key,
              status: finalMarchTime > timeDifference ? TroopsHelper.TROOPS_MARCH_STATUS.MARCH_NEGATIVE : TroopsHelper.TROOPS_MARCH_STATUS.MARCH_POSITIVE
            })
        }

        setResult(troopsResult)
    }

    return (
        <div style={{padding: 35, height: 'calc(100vh - 70px)'}}>
            <GridContainer spacing={2}>
              <GridItem xs={12} md={4}>
                <DateTimePicker defaultDate={startDate} callback={startAttackCallback} label={'Godzina początku ataku'}/>
              </GridItem>
              <GridItem xs={12} md={4}>
                <TextField callback={(e => setAttackerX(e.target.value))} value={attackerX} label={"Współrzędne X wioski atakującego"} />
              </GridItem>
              <GridItem xs={12} md={4}>
                <TextField callback={(e => setAttackerY(e.target.value))} value={attackerY} label={"Współrzędne Y wioski atakującego"} />
              </GridItem>
              <GridItem xs={12} md={4}>
                <DateTimePicker defaultDate={finishDate} callback={finishAttackCallback} label={'Godzina dojścia ataku'}/>
              </GridItem>
              <GridItem xs={12} md={4}>
                <TextField callback={(e => setDefenderX(e.target.value))} value={defenderX} label={"Współrzędne X wioski broniącego"} />
              </GridItem>
              <GridItem xs={12} md={4}>
                <TextField callback={(e => setDefenderY(e.target.value))} value={defenderY} label={"Współrzędne Y wioski broniącego"} sx={{ input: { color: 'red' } }}   />
              </GridItem>
              <GridItem>
                <Button callback={calculateWhichTroops} buttonText={"Oblicz"}/>
              </GridItem>
              <GridItem>
                <Button callback={resetForm} buttonText={"Resetuj"}/>
              </GridItem>
              <GridItem xs={12}>
                <MarchTimeResult result={result}/>
              </GridItem>
            </GridContainer>
        </div>
    );
};

export default MarchTimeCalc;