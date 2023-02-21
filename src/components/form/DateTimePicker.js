import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker as DateTimePickerMUI } from '@mui/x-date-pickers/DateTimePicker';
import DateTimeHelper from '../../helpers/DateTimeHelper';

const DateTimePicker = (props) => {
  const [value, setValue] = useState(props.defaultDate ?? DateTimeHelper.getActualDate('YYYY-MM-DD HH:mm:ss'));
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePickerMUI
                disablePast={true}
                ampm={false}
                renderInput={(props) =>
                    <TextField fullWidth {...props}
                               InputLabelProps={{style: {color: '#FFF'}}}
                               sx={{
                                 svg: { color: '#FFF' },
                                 input: { color: '#FFF' },
                                 label: { color: '#FFF' },
                                 fieldset: {borderColor: '#FFF'}
                               }}
                    />
                }
                label={props.label ?? ''}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                    if(props.callback) {
                      props.callback(newValue)
                    }
                }}
            />
        </LocalizationProvider>
    );
};

export default DateTimePicker;