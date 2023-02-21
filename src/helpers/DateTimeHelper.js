const moment = require('moment');

export const DATE_DIFFERENCE_KEYS = {
    MINUTES: 'minutes',
    HOURS: 'hours',
    DAYS: 'days',
    WEEKS: 'weeks'
}

class DateTimeHelper {
    static getActualDate = (format = null) => {
        if(!format) {
            return moment();
        } else {
            return moment().format(format)
        }
    }

    static formatDate = (date, format = 'YYYY-MM-DD') => {
        return moment(date).format(format);
    }

    static getDifferenceBetweenTwoDates = (startDate, endDate, differenceUnit = DATE_DIFFERENCE_KEYS.MINUTES) => {
        return endDate.diff(startDate, differenceUnit);
    }
}

export default DateTimeHelper;