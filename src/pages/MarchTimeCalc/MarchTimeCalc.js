import React from 'react';
import DateTime from "../../components/form/DateTime";

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
    return (
        <div>
            <DateTime/>
        </div>
    );
};

export default MarchTimeCalc;